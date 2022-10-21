/* exported reverseWord */

/*
- create new empty string
- find string.length for loop
- use for loop, starting at the last index of string (string.length - 1) and iterate backward to 0
- for each index, concat input string[index] to new string
- after loop -> return new string

DID NOT WORK - CANNOT ITERATE BACKWARD :(

- create new empty string
- create new empty array
- loop through each letter of word
- .unshift each letter into the new array
- assign new array.join('') onto new string
- return new string

------- revised -------
function reverseWord(word) {
  var reversedWord = '';
  var wordArray = [];
  for (var i = 0; i < word.length; i++) {
    wordArray.unshift(word[i]);
  }
  reversedWord = wordArray.join('');
  return reversedWord;
}
----------------------

- change approach to concat the letter to reversedWord in the before manner and assign that to the reversedWord variable
- remove the need to use array and .join() method
*/

function reverseWord(word) {
  var reversedWord = '';
  for (var i = 0; i < word.length; i++) {
    reversedWord = word[i] + reversedWord;
  }
  return reversedWord;
}
