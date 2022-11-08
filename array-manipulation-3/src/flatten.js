/* exported flatten */

/*
- create new empty array
- use for loop to loop through each index of the input array
- check if at current index of the array, the value is an array
- if yes -> use the spreader tool to get value out of the array and append it into the new flattenArray
- if not -> append the item to the new flattenArray
- return final flattenArray
*/

function flatten(array) {
  var flattenArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenArray.push(...array[i]);
    } else {
      flattenArray.push(array[i]);
    }
  }
  return flattenArray;
}
