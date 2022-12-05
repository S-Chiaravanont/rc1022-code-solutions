const express = require('express');
const app = express();
app.use(express.json());

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const postObject = req.body;
  postObject.id = nextId;
  grades[nextId] = postObject;
  nextId++;
  res.status(201);
  res.json(postObject);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
