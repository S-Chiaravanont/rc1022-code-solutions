/* exported invert */

/*
- create new empty object
- use for...in loop to go through each key
- assign new key (with value from source[key]) and new value (with key from key)
- return new object
*/

function invert(source) {
  var obj = {};
  for (var key in source) {
    obj[String(source[key])] = key;
  }
  return obj;
}
