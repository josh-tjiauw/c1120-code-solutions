const express = require('express');
const app = express();
const data = require('./data.json')
const notes = data.notes;
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const x in notes){
    arr.push(notes[x]);
  }
  res.status(200).json(arr);
})

app.get('/api/notes/:id', (req, res) => {
  const getId = req.params.id;
  const id = Number(getId);
  if(!Number.isInteger(id) || id <= 0){
    const error400 = {error: "id must be a positive integer"}
    res.status(400).json(error400);
  }
  else if(Number.isInteger(id) && id in notes) {
    res.json(notes[id]);
  }
  else{
    const error404 = {error: `cannot find note with id ${id}`};
    res.status(404).json(error404);
  }
})

const update = (index, newNote) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    notes[index] = newNote;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, 'utf8', (err) => {
      if (err) throw err;
    });
  });
}

app.post('/api/notes', (req, res) => {
  if(!req.body.content){
    res.status(400).json({ "error": "content is a required field"})
  }
  else {
    const newNote = {
      id: data.nextId,
      content: req.body.content
    };
    notes[data.nextId] = newNote;
    update(data.nextId, notes[data.nextId]);
    data.nextId++;
    res.status(201).json(newNote)
  }
})


app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if(!isNaN(id)){
    if (id <= 0) {
      res.status(400).json({ "error": "id must be a positive integer" });
    }
    else if (notes[id] === undefined) {
      res.status(404).json({ "error": `cannot find note with id ${id}` })
    }
    else if (id in notes) {
      delete notes[id];
      update(id, notes[id])
      res.status(204).send(204);
    }
  }
  else{
    res.status(500).json({"error": "An unexpected error occurred."})
  }
})

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (!isNaN(id)) {
    if (id <= 0) {
      res.status(400).json({ "error": "id must be a positive integer" })
    }
    else if (!req.body.content) {
      res.status(400).json({ "error": "content is a required field" })
    }
    else if (notes[id] === undefined) {
      res.status(404).json({ "error": `cannot find note with id ${id}` })
    }
    else if (id in notes) {
      const newNote = req.body.content;
      notes[id].content = newNote;
      update(id, notes[id]);
      res.status(200).json(notes[id])
    }
  }

  else {
    res.status(500).json({"error": "An unexpected error occurred."})
  }
})

app.listen(3000, () => console.log('Listening to port 3000.'));
