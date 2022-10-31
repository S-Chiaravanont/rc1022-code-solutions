/* exported includes */

/*
- loop through each element in the array
- if array at index i === value then return true
- after loop, return false if nothing matches
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
