const express = require('express');
const app = express();
app.use(express.json());

let nextId = 1;
const grades = [];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  const postObject = req.body;
  postObject.id = nextId;
  grades.push(postObject);
  nextId++;
  res.status(201).end();
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
