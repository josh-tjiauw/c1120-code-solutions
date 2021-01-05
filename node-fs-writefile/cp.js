const fs = require('fs');
const firstFile = process.argv[2];
const secondFile = process.argv[3];

fs.readFile(firstFile, 'utf8', (err, data) => {
  if(err) throw err;
  fs.writeFile(secondFile, data, 'utf8', () => console.log('Copied.'))
});
