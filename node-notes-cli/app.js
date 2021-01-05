const fs = require('fs');
let jsonFile = {};

const read = fs.readFile('data.json', 'utf8', (err, data) => {
  if(err) throw err;
  jsonFile = JSON.parse(data);
  console.log(jsonFile.notes);
});
