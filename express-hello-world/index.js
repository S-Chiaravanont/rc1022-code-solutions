const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('I am here');
});

app.listen(3000, callBack);

function callBack() {
}
