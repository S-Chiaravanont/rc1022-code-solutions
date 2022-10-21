/* exported toObject */

/*
- checking if input array length is strictly equal to 2 otherwise return invalid input and break out the function
- create new empty object
- assuming input array only contains 2 values which has index 0 & 1
- assign new property (array[0]) with new value (array[1]) to empty object
- return new object
*/

function toObject(array) {
  if (array.length !== 2) {
    return 'invalid input';
  }
  var newObject = {};
  newObject[array[0]] = array[1];
  return newObject;
}
