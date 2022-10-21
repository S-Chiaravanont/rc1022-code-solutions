/* exported getValues */

/*
- check if input object is empty -> if yes return empty array []
- create new empty array
- use for...in loop to go through each key of the object
- access the value of each key with object[key] and push into the new array
- return new array

---------Revise----------
remove condition to check if input object is empty
- ({} === {}) will result in false, cannot compare array like that because array is pointer
- it's not important to check if input obj is empty or not, it won't affect the for...in loop
*/

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
