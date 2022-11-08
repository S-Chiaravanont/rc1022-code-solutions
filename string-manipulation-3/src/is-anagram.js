/* exported isAnagram */

/*
- create new string variable that take input string 1 and applied replace method
that remove space with nothing .replace(' ', '')
- create another new string variable that take input string 2 and applied replace
method that remove space with nothing .replce(' ', '')
- sort both of the new string by alphabetical order
- return sorted first string includes sorted second string (boolean)

---- minor revision ----
- .replace need to be .replaceAll to take care of multiple spaces
- can combine all of the methods into one line in the correct order of operation
*/

function isAnagram(firstString, secondString) {
  var sortedFirstString = firstString.replaceAll(' ', '').split('').sort().join('');
  var sortedSecondString = secondString.replaceAll(' ', '').split('').sort().join('');
  return (sortedFirstString.includes(sortedSecondString) && sortedSecondString.includes(sortedFirstString));
}
