const fs = require('fs');

const readThis = process.argv[2];

const fileContent = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

fileContent(readThis);
