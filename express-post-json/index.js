const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.use(express.json())

app.get('/api/grades', (req, res) => {
  const arr = [];
  for(const x in grades){
    arr.push(grades[x]);
  }
  res.json(arr);
})

app.post('/api/grades/', (req, res) => {
  const newGrade = {
    name: req.body.name,
    id: nextId,
    course: req.body.course,
    score: +req.body.score
  }
  grades[nextId] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
})

app.listen(3000, () => console.log('Listening on port 3000.'))
