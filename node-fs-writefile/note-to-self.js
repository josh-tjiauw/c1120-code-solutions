const fs = require('fs');
const note = process.argv[2];

fs.writeFile('note.txt', note, 'utf8', () => console.log(`Wrote "${note}" in note.txt.`))

//https://i.imgur.com/YXx9P5k.png
