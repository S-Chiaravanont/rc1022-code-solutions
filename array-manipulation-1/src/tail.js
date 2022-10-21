/* exported tail */

/*
- check if input array is empty -> if yes return empty array []
- create new empty array
- loop through each item starting index 1
- add those item onto new array
- after loop -> return new array

---------Revise----------
remove condition to check if input array is empty
- ([] === []) will result in false, cannot compare array like that because array is pointer
- should be check if input array.length is === 0 instead.
*/

function tail(array) {

  var tailArray = [];
  for (var i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
