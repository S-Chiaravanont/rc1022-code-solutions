const fs = require('fs');
const { argv } = require('node:process');

const data = argv[2] + '\n';

fs.writeFile('note.txt', data, err => {
  if (err) throw err;
});
