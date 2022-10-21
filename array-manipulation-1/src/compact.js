/* exported compact */

/*
- check if empty array is given -> if yes return empty array []
- create new empty array
- loop through each item of array
- check if item at each index is strictly not equal to second argument value
- if true -> append this item onto new array
- after loop, return new array

INCORRECT ASSUMPTION, there's no 2nd parameter

- reread compact.test.js multiple times to under stand what is given, what is expected and what is the actual operation required
- TRUTHY**** read more on MDN
- check if empty array is given -> if yes return empty array []
- create new empty array
- loop through each item of array
- check if item at each index is *truthy*  -> if(item)
- then append this item onto new array
- after loop, return new array

---------Revise----------
remove condition to check if input array is empty
- ([] === []) will result in false, cannot compare array like that because array is pointer
- should be check if input array.length is === 0 instead.
*/

function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
