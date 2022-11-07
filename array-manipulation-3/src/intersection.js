/* exported intersection */

/*
- create new empty array intersectionArray
- use for loop to iterate through first array
- check if each item of first array is included in the second array
- if it is -> append item onto intersectionArray
- use another for loop to iterate through second array
- check if each item is included in first array AND not included in intersectionArray
- if yes -> append item onto intersectionArray
- return intersectionArray
*/

function intersection(first, second) {
  var intersectionArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      intersectionArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) && !intersectionArray.includes(second[j])) {
      intersectionArray.push(second[j]);
    }
  }
  return intersectionArray;
}
