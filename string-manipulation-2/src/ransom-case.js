/* exported ransomCase */

/*
NOTE: uppercase on every odd letter
- create new string variable and assign input word with .toLowerCase() applied
- create new empty string variable
- concat lowercased word at index 0 to the new string
- use for loop to iterate through input word (lowercased) start at i=1
- if i % 2 !== 0 (case for ODD)
- then toUpperCase() is done to lowercased[i] and concat to new string
- else (case for EVEN) just concat lowercased[i] to new string
- return new string
*/

function ransomCase(string) {
  var lowerCased = string.toLowerCase();
  var ransomCaseWord = '';
  ransomCaseWord += lowerCased[0];
  for (var i = 1; i < string.length; i++) {
    if (i % 2 !== 0) {
      ransomCaseWord += lowerCased[i].toUpperCase();
    } else {
      ransomCaseWord += lowerCased[i];
    }
  }
  return ransomCaseWord;
}
