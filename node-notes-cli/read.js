const data = require('./data.json');

function read() {
  for (const id in data.notes) {
    console.log(`${id}: ${data.notes[id]}`);
  }
}

module.exports = read;
