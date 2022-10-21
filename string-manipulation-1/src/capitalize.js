/* exported capitalize */

/*
- create an empty string variable
- if input word.length === 1 -> concat word.toUpperCase to empty string -> return that string
- loop through each index of word
- if index === 0, set that char to uppercase and concat to the empty string
- if index !== 0, set that char to lowercase and concat to the string
- return string
*/

function capitalize(word) {
  var capitalizedWord = '';
  if (word.length === 1) {
    capitalizedWord = word.toUpperCase();
    return capitalizedWord;
  }
  var lowercasedWord = word.toLowerCase();
  for (var i = 0; i < lowercasedWord.length; i++) {
    if (i === 0) {
      capitalizedWord += lowercasedWord[i].toUpperCase();
    } else {
      capitalizedWord += lowercasedWord[i];
    }
  }
  return capitalizedWord;
}
