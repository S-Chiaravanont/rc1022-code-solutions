const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();

app.use(express.json());

const badRequestNegInt = { error: 'id must be a positive integer' };
const badRequestNoContent = { error: 'content is a required field' };
const unexpectedError = { error: 'An unexpected error occured.' };

app.post('/api/notes', (req, res) => {
  const note = req.body;
  if (Object.keys(note).length === 0) {
    res.status(400);
    res.json(badRequestNoContent);
  } else {
    note.id = data.nextId;
    data.notes[data.nextId] = note;
    data.nextId++;
    const parseData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', parseData, err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.status(500);
        res.send(unexpectedError);
      }
      // eslint-disable-next-line no-console
      console.log('New note added.');
      res.status(201);
      res.json(note);
    });
  }
});

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const note in data.notes) {
    notesArray.push(data.notes[note]);
  }
  res.send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400);
    res.json(badRequestNegInt);
  } else if (!data.notes[id]) {
    const badRequestNotFound = { error: `cannot find note with id ${id}` };
    res.status(404);
    res.json(badRequestNotFound);
  } else {
    res.send(data.notes[id]);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = req.params.id;
  if (deleteId < 0) {
    res.status(400);
    res.json(badRequestNegInt);
  } else if (!data.notes[deleteId]) {
    const badRequestNotFound = { error: `cannot find note with id ${deleteId}` };
    res.status(404);
    res.json(badRequestNotFound);
  } else {
    delete data.notes[deleteId];
    const parseData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', parseData, err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.status(500);
        res.send(unexpectedError);
      }
      // eslint-disable-next-line no-console
      console.log('A note is deleted from notes and notes have been saved');
      res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const changeId = req.params.id;
  if (changeId < 0) {
    res.status(400);
    res.json(badRequestNegInt);
  } else if (!data.notes[changeId]) {
    const badRequestNotFound = { error: `cannot find note with id ${changeId}` };
    res.status(404);
    res.json(badRequestNotFound);
  } else if (Object.keys(req.body).length === 0) {
    res.status(400);
    res.json(badRequestNoContent);
  } else {
    const note = req.body;
    note.id = Number(changeId);
    data.notes[changeId] = note;
    const parseData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', parseData, err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.status(500);
        res.send(unexpectedError);
      }
      // eslint-disable-next-line no-console
      console.log('Notes have been editted and saved');
      res.status(200);
      res.json(note);
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
