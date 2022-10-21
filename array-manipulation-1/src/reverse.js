/* exported reverse */

/*
- check if input array is empty -> if yes return empty array []
- create new empty array
- loop through each item in the array
- unshift each item onto new array
- return new array
*/

function reverse(array) {
  if (array === []) {
    return [];
  }
  var reversedArray = [];
  for (var i = 0; i < array.length; i++) {
    reversedArray.unshift(array[i]);
  }
  return reversedArray;
}
