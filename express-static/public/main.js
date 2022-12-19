const express = require('express');
const path = require('path');

const app = express();

const dirPublic = path.join(__dirname, 'public');
// eslint-disable-next-line no-console
console.log(dirPublic);

const staticPublic = express.static('public');

app.use(staticPublic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
