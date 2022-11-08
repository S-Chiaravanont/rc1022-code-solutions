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
    if (!second.includes(first[i])) {
      differenceArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j]) && !differenceArray.includes(second[j])) {
      differenceArray.push(second[j]);
    }
  }
  return differenceArray;
}
