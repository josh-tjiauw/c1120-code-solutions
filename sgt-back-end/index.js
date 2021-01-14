const express = require('express');
const pg = require('pg');

const app = express();
app.use(express.json());
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});


app.get('/api/grades/:gradeId', (req, res, next) => {
  // validate the "inputs" FIRST
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    // there is no way that a matching grade could be found
    // so we immediately respond to the client and STOP the code
    // with a return statement
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  // Ok, the input is reasonable, time to query the database.
  const sql = `
    select *
      from "grades"
     where "gradeId" = $1
  `;
  // 👆 We are NOT putting the user input directly into our query
  const params = [gradeId];
  // 👆 instead, we are sending the user input in a separate array
  /**
   * review the documentation on parameterized queries here:
   * https://node-postgres.com/features/queries#parameterized-query
   * you'll be using this information to prevent SQL injection attacks
   *
   * https://www.youtube.com/watch?v=_jKylhJtPmI
   */
  db.query(sql, params)
    .then(result => {
      // the query succeeded, even if nothing was found
      // the Result object will include an array of rows
      // see the docs on results
      // https://node-postgres.com/api/result
      const grade = result.rows[0];
      if (!grade) {
        // we could not have known ahead of time without actually querying the db
        // but the specific grade being requested was not found in the database
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        // the specific grade was found in the database, yay!
        res.json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      // possibly due to a syntax error in the SQL statement
      // print the error to STDERR (the terminal) for debugging purposes
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
})

app.get('/api/grades/', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = []
      for (let x in result.rows){
        grade.push(result.rows[x])
      }
      res.status(200)
      res.json(grade)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Query failed'})
    })
})

app.post('/api/grades/', (req, res, next) => {
  const sql = `
  insert into "grades" ("course", "name", "score")
  values ($1, $2, $3)
  returning *
  `
  const params = [req.body.course, req.body.name, req.body.score]

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (params[0] === '' || params[1] === '' || params[2] === '' ) {
        res.status(400).send('Cannot leave this field blank.')
      }
      else if (params[2] < 1 || params[2] > 100) {
        res.status(400).json('Score has to be between 1-100.')
      }
      res.status(201).json(grade)
    })

    .catch(err => {
      res.status(500).json({
        error: 'An unexpected error occurred.'
      })
    })
})

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `update "grades"
  set "name"=$1, "course"=$2, "score"=$3
  where "gradeId"=$4
  `;
  const params = [req.body.name, req.body.course, req.body.score, req.params.gradeId];

  db.query(sql, params)
    .then(result =>{
      const grade = result.rows[0];
      console.log(grade)
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      }
      else{
        res.status(200).json(`Updated ${gradeId}!`)
      }
    })
    .catch(err => {
      res.status(500).json({error: 'An unexpected error occurred.'})
      console.error(err.message)
    })
})

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
  delete from "grades"
  where "gradeId"=$1
  returning *
  `;
  const params = [req.params.gradeId]

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      }
      else{
        res.status(204).json(`${grade} has been successfully been deleted.`)
      }
    })
    .catch(err => {
      res.status(500).json({error: 'An unexpected error occurred.'})
      console.error(err.message)
    })
})

app.listen(3000, () =>{
  console.log("listening on 3000")
})
