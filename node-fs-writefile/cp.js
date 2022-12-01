const fs = require('fs');
const { argv } = require('node:process');

fs.readFile(argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(argv[3], data, err => {
    if (err) throw err;
  });
});
