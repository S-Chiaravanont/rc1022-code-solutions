/* exported unique */

/*
- check if input array is empty -> if yes return empty array []
- create new empty array uniqueArray
- push first item of the input array into uniqueArray because it's always unique
- use for loop to iterate through each item of the array starting at index 1
- check if array[i] is included in the uniqueArray
- if not, push item onto uniqueArray
- return uniqueArray
*/

function unique(array) {
  if (array.length === 0) {
    return [];
  }
  var uniqueArray = [];
  uniqueArray.push(array[0]);
  for (var i = 1; i < array.length; i++) {
    if (!Array.prototype.includes.call(uniqueArray, array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
