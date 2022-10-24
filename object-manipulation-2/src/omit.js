/* exported omit */

/*
- create new empty array
- create new empty object
- use for...in loop to go through each key in source
- push each key in source to empty array
- loop through each key in key array
- if key isn't included in keys array -> add this property to new object
- return new object
*/

function omit(source, keys) {
  var sourceKey = [];
  var obj = {};
  for (var key in source) {
    sourceKey.push(key);
  }
  for (var i = 0; i < sourceKey.length; i++) {
    if (!Array.prototype.includes.call(keys, sourceKey[i])) {
      obj[sourceKey[i]] = source[sourceKey[i]];
    }
  }
  return obj;
}
