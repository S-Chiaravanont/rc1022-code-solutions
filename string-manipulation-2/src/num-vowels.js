/* exported numVowels */

/*
- create a new string and assign input string and applied toLowerCase() method to it
- create a counter variable = 0
- use for loop to go through the string
- compare each letter (string[i]) to vowel with || 'a' || 'e'...
- if letter match with vowel -> counter++
- return counter
*/

function numVowels(string) {
  var lowerCasedString = string.toLowerCase();
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (lowerCasedString[i] === 'a' || lowerCasedString[i] === 'e' || lowerCasedString[i] === 'i' || lowerCasedString[i] === 'o' || lowerCasedString[i] === 'u') {
      counter++;
    }
  }
  return counter;
}
