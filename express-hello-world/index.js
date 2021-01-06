const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('Passed a string');
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
