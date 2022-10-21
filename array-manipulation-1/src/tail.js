/* exported tail */

/*
- check if input array is empty -> if yes return empty array []
- create new empty array
- loop through each item starting index 1
- add those item onto new array
- after loop -> return new array
*/

function tail(array) {
  if (array === []) {
    return [];
  }
  var tailArray = [];
  for (var i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
