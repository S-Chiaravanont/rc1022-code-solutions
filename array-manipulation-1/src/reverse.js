/* exported reverse */

/*
- check if input array is empty -> if yes return empty array []
- create new empty array
- loop through each item in the array
- unshift each item onto new array
- return new array

---------Revise----------
remove condition to check if input array is empty
- ([] === []) will result in false, cannot compare array like that because array is pointer
- should be check if input array.length is === 0 instead.
*/

function reverse(array) {
  var reversedArray = [];
  for (var i = 0; i < array.length; i++) {
    reversedArray.unshift(array[i]);
  }
  return reversedArray;
}
