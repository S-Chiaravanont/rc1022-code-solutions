/* exported defaults */

/*
- use for...in loop to get each key of source
- find out if key is a property of target
- if not, assign source key and value to target
*/

function defaults(target, source) {
  for (var key in source) {
    if (!Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = source[key];
    }
  }
}
