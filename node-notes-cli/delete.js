const data = require('./data.json');
const fs = require('fs');

function remove(id) {
  delete data.notes[id];
  const parseData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', parseData, err => {
    if (err) throw err;
  });
}

module.exports = remove;
