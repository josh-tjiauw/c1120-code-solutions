const express = require('express');
const app = express();
const notes = {
  "1": {
    "content": "The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.",
    "id": 1
  },
  "2": {
    "content": "Prototypal inheritance is how JavaScript objects delegate behavior.",
    "id": 2
  },
  "3": {
    "content": "In JavaScript, the value of `this` is determined when a function is called; not when it is defined.",
    "id": 3
  },
  "4": {
    "content": "A closure is formed when a function retains access to variables in its lexical scope.",
    "id": 4
  }
};

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
