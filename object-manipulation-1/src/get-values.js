/* exported getValues */

/*
- check if input object is empty -> if yes return empty array []
- create new empty array
- use for...in loop to go through each key of the object
- access the value of each key with object[key] and push into the new array
- return new array
*/

function getValues(object) {
  if (object === {}) {
    return [];
  }
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
