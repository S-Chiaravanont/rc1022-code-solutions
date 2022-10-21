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
*/

function reverseWord(word) {
  var reversedWord = '';
  var wordArray = [];
  for (var i = 0; i < word.length; i++) {
    wordArray.unshift(word[i]);
  }
  reversedWord = wordArray.join('');
  return reversedWord;
}
