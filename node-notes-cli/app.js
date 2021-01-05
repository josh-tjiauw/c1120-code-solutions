const fs = require('fs');
let jsonFile = require('./data.json');


const read = () => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(jsonFile.notes);
  });
}

const create = () => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
  if(err) throw err;
  const userInput = process.argv[3];
  jsonFile.notes[jsonFile.nextId] = userInput;
  jsonFile.nextId++;
  const newData = JSON.stringify(jsonFile, null, 2);
  fs.writeFile('./data.json', newData, 'utf8', ()=>console.log(jsonFile.notes));
});
}

const del = () => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
  const indexToDelete = process.argv[3];
  delete jsonFile.notes[indexToDelete];
  const newData = JSON.stringify(jsonFile, null, 2);
  fs.writeFile('./data.json', newData, 'utf8', () => console.log(jsonFile.notes));
});
}

const update = (index) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const userInput = process.argv[4];
    jsonFile.notes[index] = userInput;
    const newData = JSON.stringify(jsonFile, null, 2);
    fs.writeFile('./data.json', newData, 'utf8', () => console.log(jsonFile.notes));
  });
}

switch(process.argv[2]) {
  case 'read':
    read();
    break;

  case 'create':
    create();
    break;

  case 'delete':
    del();
    break;

  case 'update': {
    index = process.argv[3]
    update(index);
  }

    break;

  default:
    console.log('Wrong Input');
}
