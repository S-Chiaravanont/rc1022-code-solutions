var x = 30;
var y = 35;
var z = 15;

var maximumValue = Math.max(x, y, z);
console.log('Value of maximumValue is:', maximumValue);

var heroes = ['batman', 'superman', 'iron man', 'hulk'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('Value of randomIndex is:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Value of randomHero is:', randomHero);

var library = [
  {
    title: 'Kenobi',
    author: 'John Jackson Miller'
  },
  {
    title: 'Rogue One: A Star Wars Story',
    author: 'Alexander Freed'
  },
  {
    title: 'Dark Force Rising',
    author: 'Timothy Zahn'
  }
];

var lastBook = library.pop();
console.log('Value of lastBook is:', lastBook);

var firstBook = library.shift();
console.log('Value of firstBook is:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library is:', library);

var fullName = 'Chai Chiaravanont';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName is:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName is:', sayMyName);
