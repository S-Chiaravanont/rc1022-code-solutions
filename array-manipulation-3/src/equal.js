/* exported equal */

/*
- check if input array length is 0 -> if yes return true
- use for loop to iterate through each item in both array
- use if statement to compare if at each index the item from array one to item from array two
- if it's not equal then return false
- after the loop (meaning it doesn't break and return false wihtin the loop) -> return true

--- error for case where array one length is not equal to array 2 length --
add condition to check if array one length is equal to array two length or not -> if not return false
*/

function equal(first, second) {
  if (first.length === 0 && second.length === 0) {
    return true;
  } else if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
