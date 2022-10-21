/* exported capitalizeWord */

/*
- create new string called lowerCaseWord and assign it to input word.toLowerCase()
- create a string variable called javaScipt with value 'javascript'
- check if this input word in lower case is strictly equal to javaScript -> if yes return "JavaScript"
- create new empty string
--------option 1---------
- use for loop to go through each letter of the lowerCaseWord
- if (i === 0) -> use toUpperCase to that letter -> lowerCaseWord[i].toUpperCase and concat it to the new empty string
- else -> concat each letter to the new string
--------option 2---------
- concat lowerCaseWord[0].toUpperCase to the new empty string

*/

function capitalizeWord(word) {
  var lowerCaseWord = word.toLowerCase();
  var javaScript = 'javascript';
  if (lowerCaseWord === javaScript) {
    return 'JavaScript';
  }
  var capitalizedWord = '';
  capitalizedWord += lowerCaseWord[0].toUpperCase();
  for (var i = 1; i < lowerCaseWord.length; i++) {
    capitalizedWord += lowerCaseWord[i];
  }
  return capitalizedWord;
}
