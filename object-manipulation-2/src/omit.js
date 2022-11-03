/* exported omit */

/*
- create new empty array
- create new empty object
- use for...in loop to go through each key in source
- push each key in source to empty array
- loop through each key in key array
- if key isn't included in keys array -> add this property to new object
- return new object

old code block
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

---Revision-----
- remove sourceKey array
- use for...in loop to go through each key in source
- determine if key is included in keys array
- if not push key and value to obj

---revision 2---
- change Array.prototype.includes.call() with array.includes()

*/

function omit(source, keys) {
  var obj = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      obj[key] = source[key];
    }
  }
  return obj;
}
