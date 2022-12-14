/* exported pick */

/*
- create new empty object
- use for loop to iterate through each key
- find out if object has key property
- if yes, assign the key & object at key into the new object
- return new object

ERROR ---
- undefined value is not supposed to get passed onto new object
- need conditional check if value is undefined
- if not add key & value onto new object
*/

function pick(source, keys) {
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    if (Object.prototype.hasOwnProperty.call(source, keys[i])) {
      if (source[keys[i]] !== undefined) {
        obj[keys[i]] = source[keys[i]];
      }
    }
  }
  return obj;
}
