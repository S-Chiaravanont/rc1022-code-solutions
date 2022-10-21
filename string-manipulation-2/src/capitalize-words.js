/* exported capitalizeWords */

/*
- create new string and assign input string with method .toLowerCase() to it
- create new array and assign new string, with content being lower cased, with method .split(' ') to it
- create new empty array
- for loop to go through each word in splited array
- create a new empty string
- for loop to go through each letter of the current word
- if index === 0, capitalize the letter and concat to the empty string
- otherwise concat the letter to the string
- return the capitalized array with .join(' ') method
*/

function capitalizeWords(string) {
  var lowerCasedString = string.toLowerCase();
  var stringArray = lowerCasedString.split(' ');
  var capitalizedArray = [];
  // console.log(stringArray);
  for (var i = 0; i < stringArray.length; i++) {
    var wordIndex = '';
    for (var j = 0; j < stringArray[i].length; j++) {
      if (j === 0) {
        wordIndex += stringArray[i][j].toUpperCase();
      } else {
        wordIndex += stringArray[i][j];
      }
    }
    capitalizedArray.push(wordIndex);
  }
  return capitalizedArray.join(' ');
}
