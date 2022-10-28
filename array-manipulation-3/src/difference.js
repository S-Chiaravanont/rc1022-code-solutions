/* exported difference */

/*
- create new empty array differenceArray
- use for loop to iterate through first array
- check if each item of first array is included in the second array
- if it is not -> append item onto differenceArray
- use another for loop to iterate through second array
- check if each item is not included in first array AND not included in intersectionArray
- if yes -> append item onto differenceArray
- return differenceArray
*/

function difference(first, second) {
  var differenceArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!Array.prototype.includes.call(second, first[i])) {
      differenceArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!Array.prototype.includes.call(first, second[j]) && !Array.prototype.includes.call(differenceArray, second[j])) {
      differenceArray.push(second[j]);
    }
  }
  return differenceArray;
}
