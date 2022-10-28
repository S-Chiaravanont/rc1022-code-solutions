/* exported union */

/*
- create new empty array unionArray
- append all first array into unionArray
- use for loop to iterate through each item of second array
- check if item is already included in unionArray
- if not, append item into unionArray
- return unionArray
*/

function union(first, second) {
  var unionArray = [...first];
  for (var i = 0; i < second.length; i++) {
    if (!Array.prototype.includes.call(unionArray, second[i])) {
      unionArray.push(second[i]);
    }
  }
  return unionArray;
}
