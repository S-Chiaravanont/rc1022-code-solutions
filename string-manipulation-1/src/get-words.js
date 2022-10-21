/* exported getWords */

/*
- check if string is empty -> return empty array
- otherwise follow code below
- create a new array
- use .split with value ' ' on input string and assign it to the new array
- return array
*/

function getWords(string) {
  if (string === '') {
    return [];
  }
  var stringArray = string.split(' ');
  return stringArray;
}
