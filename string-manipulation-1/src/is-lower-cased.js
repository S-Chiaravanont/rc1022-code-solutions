/* exported isLowerCased */

/*
- make a copy of the input word and .toLowerCase() the content and set it to a new variable
- for loop through input word.length
- at each index compare input word to capitalized word in new variable
- if false -> return false
- out of the loop -> return true if all letters are lower cased
*/

function isLowerCased(word) {
  var lowerCasedWord = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== lowerCasedWord[i]) {
      return false;
    }
  }
  return true;
}
