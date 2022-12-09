const takeAChance = require('./take-a-chance');

const myPromise = takeAChance('Chai');

myPromise.then(value => {
  console.log(value);
}).catch(error => {
  console.error(error.message);
});
