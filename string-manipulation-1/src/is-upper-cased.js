/* exported isUpperCased */

/*
- make a copy of the input word and capitalize the content and set it to a new variable
- for loop through input word.length
- at each index compare input word to capitalized word in new variable
- if false -> return false
- out of the loop -> return true if all letters are upper cased
*/

function isUpperCased(word) {
  var upperCasedWord = word.toUpperCase();
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== upperCasedWord[i]) {
      return false;
    }
  }
  return true;
}
