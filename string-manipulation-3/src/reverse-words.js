/* exported reverseWords */

/*
- create new array that take the input string and applied .split(' ') method to store each word
- create new empty array to store reversed word
- use for loop to iterate through each word in array
- create new empty string to concat reversed letter
- use another for loop to iterate through each letter of the word
- concat each letter in the reverse way to the empty string
- after all the concat is done within the word, append the word into the empty array
- return array with words reversed with .join(' ') method to join the all the words in the array with a space which also turn the value into type of string
*/

function reverseWords(string) {
  var stringArray = string.split(' ');
  var reverseStringArray = [];
  for (var i = 0; i < stringArray.length; i++) {
    let reversedString = '';
    for (var j = 0; j < stringArray[i].length; j++) {
      reversedString = stringArray[i][j] + reversedString;
    }
    reverseStringArray.push(reversedString);
  }
  return reverseStringArray.join(' ');
}
