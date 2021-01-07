const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
const arr = [];

app.use(express.json())

app.get('/api/grades', (req, res) => {
  for(const x in grades){
    arr.push(grades);
  }
  res.json(arr);
})

app.post('/api/grades/', (req, res) => {
  const newGrade = {
    id: arr.length + 1,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  }
  arr.push(newGrade);
  res.status(201).json(arr);
})

app.listen(3000, () => console.log('Listening on port 3000.'))
