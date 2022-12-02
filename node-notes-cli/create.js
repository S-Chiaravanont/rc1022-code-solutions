const data = require('./data.json');
const fs = require('fs');

function create(text) {
  data.notes[data.nextId] = text;
  data.nextId++;
  const parseData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', parseData, err => {
    if (err) throw err;
  });
}

module.exports = create;
