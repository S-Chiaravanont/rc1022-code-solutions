/* exported getKeys */

/*
- check if input object is empty -> if yes, return empty array []
- create new empty array
- use for...in loop to iterate through object
- for each key -> push into new array
- return array
*/

function getKeys(object) {
  if (object === {}) {
    return [];
  }
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
