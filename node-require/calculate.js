const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const { argv } = require('node:process');

const keyWords = ['plus', 'minus', 'times', 'over'];

if (keyWords.includes(argv[3])) {
  if (argv[3] === keyWords[0]) {
    console.log(`result: ${add.plus(argv[2], argv[4])}`);
  } else if (argv[3] === keyWords[1]) {
    console.log(`result: ${subtract.minus(argv[2], argv[4])}`);
  } else if (argv[3] === keyWords[2]) {
    console.log(`result: ${multiply.times(argv[2], argv[4])}`);
  } else {
    console.log(`result: ${divide.over(argv[2], argv[4])}`);
  }
} else {
  console.log('invalid operation');
}
