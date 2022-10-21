/* exported initial */

/*
- check if input array is empty -> if yes, return empty array []
- create a new empty array
- for loop through each item with condition being array.length-1 to not iterate through last item
- for each iteration push each item onto new array
- return new array

---------Revise----------
remove condition to check if input array is empty
- ([] === []) will result in false, cannot compare array like that because array is pointer
- should be check if input array.length is === 0 instead.
*/

function initial(array) {
  var initialArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}
