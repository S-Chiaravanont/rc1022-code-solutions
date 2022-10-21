/* exported getKeys */

/*
- check if input object is empty -> if yes, return empty array []
- create new empty array
- use for...in loop to iterate through object
- for each key -> push into new array
- return array

---------Revise----------
remove condition to check if input object is empty
- ({} === {}) will result in false, cannot compare array like that because array is pointer
- it's not important to check if input obj is empty or not, it won't affect the for...in loop
*/

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
