const fs = require('fs');
const randomNumber = Math.random();
fs.writeFile('random.txt', randomNumber, 'utf8', () => console.log(`Wrote ${randomNumber} in random.txt`))

//https://i.imgur.com/JRPutAk.png
