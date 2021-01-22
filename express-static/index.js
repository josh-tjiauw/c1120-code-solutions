const express = require('express');
const path = require('path');
const app = express();

const url = path.join(__dirname, 'public')
console.log(url)

app.use(express.static(url));

app.listen(3000, () => {
  console.log('Listening on port 3000');
} )
