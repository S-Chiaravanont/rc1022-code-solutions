const data = require('./data.json');
const fs = require('fs');

function update(id, text) {
  data.notes[id] = text;
  const parseData = JSON.stringify(data, null, 2);
  fs.writeFileSync('data.json', parseData, err => {
    if (err) throw err;
  });
}

module.exports = update;
