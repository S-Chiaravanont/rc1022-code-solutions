const { argv } = require('node:process');
const read = require('./read.js');
const create = require('./create.js');
const remove = require('./delete.js');
const update = require('./update.js');

if (argv[2] === 'read') {
  read();
} else if (argv[2] === 'create') {
  create(argv[3]);
} else if (argv[2] === 'delete') {
  remove(argv[3]);
} else if (argv[2] === 'update') {
  update(argv[3], argv[4]);
} else {
  console.log('Invalid operation');
}
