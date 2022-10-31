/* exported firstChars */

/*
- create new empty string
- use for loop to iterate through string with condition i < length (input)
- return new string

ERROR - not passing on empty string and length > string.length
- need condition for those before everything else
- if string.length === 0 -> return empty string ''
- if length > string.length -> return string
*/

function firstChars(length, string) {
  if (string.length === 0) {
    return '';
  }
  if (length > string.length) {
    return string;
  }
  var firstCharsResult = '';
  for (var i = 0; i < length; i++) {
    firstCharsResult += string[i];
  }
  return firstCharsResult;
}
