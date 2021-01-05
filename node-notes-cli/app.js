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
  jsonFile = JSON.parse(data);
  const userInput = process.argv[3];
  jsonFile.notes[jsonFile.nextId] = userInput;
  jsonFile.nextId++;
  const newData = JSON.stringify(jsonFile, null, 2);
  fs.writeFile('./data.json', newData, 'utf8', ()=>console.log(jsonFile));
});
}

const del = () => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
  const indexToDelete = process.argv[3];
  delete jsonFile.notes[indexToDelete];
  const newData = JSON.stringify(jsonFile, null, 2);
  fs.writeFile('./data.json', newData, 'utf8', () => console.log(jsonFile));
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

  default:
    console.log('Wrong Input');
}
