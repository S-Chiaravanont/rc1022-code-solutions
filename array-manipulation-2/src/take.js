/* exported take */

/*
- create new empty array
- use for loop to loop through input array with condition i < count
- at each iteration push the item into new array
- return new array

-----error for empty array input---
- need to add check if input array.length === 0 then return empty [] before everything else

function take(array, count) {
  if (array.length === 0) {
    return [];
  }
  var returnArray = [];
  for (var i = 0; i < count; i++) {
    returnArray.push(array[i]);
  }
  return returnArray;
}

----- alternative solution -----
using Array.slice(0, count)
*/

function take(array, count) {
  return array.slice(0, count);
}
