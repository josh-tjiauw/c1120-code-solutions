const fs = require('fs');

const fileContent = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

const getFiles = () => {
  for (let i = 2; i < process.argv.length; i++){
    fileContent(process.argv[i]);
  }
}

getFiles();
