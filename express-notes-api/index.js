const express = require('express');
const app = express();
const data = require('./data.json')
const notes = data.notes;

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const x in notes){
    arr.push(notes[x]);
  }
  res.status(200).json(arr);
})

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if(id <= 0){
    const error400 = {error: "id must be a positive integer"}
    res.status(400).json(error400);
  }
  else if(id in notes) {
    res.json(notes[id]);
  }
  else{
    const error404 = {error: `cannot find note with id ${id}`};
    res.status(404).json(error404);
  }
})

app.listen(3000, () => console.log('Listening to port 3000.'));
