/* exported lastChars */

/*
- check if input string is empty -> if yes return empty string ''
- check if length > string.length -> if yes return string
- create a new empty string

----------------------SMH--------------------
- find out how many index to splice out
- ex: string.length = 15 -> last index = 14, given length input is 5, first index to start new string is 14-5 = 9
- means we need to remove index 0 to 8 which is 9 items
- String.splice(start, deleteCount) -> start always index 0, deleteCount = string.length - length
- new string = string.splice(0, string.length - length)
- return new string
---------------------------------------------
OOOPS splice isn't string method... LOL smh

- ex: string.length = 15 -> last index = 14, given length input is 5, first index to start new string is 14-5 = 9
- means we need to remove index 0 to 8 which is 9 items
- use for loop and start i at index (string.length - length)
- concat letter[i] to new string
- return string

--------------DOUBLE SMH-------------------
- String.slice(start, end)
- alternate code:

function lastChars(length, string) {
  if (string.length === 0) {
    return '';
  }
  if (length > string.length) {
    return string;
  }
  var lastCharsString = string.slice(length * -1)
  return lastCharsString;
}
*/

function lastChars(length, string) {
  if (string.length === 0) {
    return '';
  }
  if (length > string.length) {
    return string;
  }
  var lastCharsString = '';
  for (var i = string.length - length; i < string.length; i++) {
    lastCharsString += string[i];
  }
  return lastCharsString;
}
