/* exported capitalize */

/*
- create an empty string variable
- if input word.length === 1 -> concat word.toUpperCase to empty string -> return that string
- loop through each index of word
- if index === 0, set that char to uppercase and concat to the empty string
- if index !== 0, set that char to lowercase and concat to the string
- return string

--------- revised ------------
- comment out if statement when word.length === 1, not necessary
- within loop, remove condition when i === 0 and manually adding word[0].uppercase to the string prior to the loop
- start the loop at index 1 instead since we're already adding first letter prior to loop
*/

function capitalize(word) {
  var capitalizedWord = '';
  // if (word.length === 1) {
  //   capitalizedWord = word.toUpperCase();
  //   return capitalizedWord;
  // }
  var lowercasedWord = word.toLowerCase();
  capitalizedWord += lowercasedWord[0].toUpperCase();
  for (var i = 1; i < lowercasedWord.length; i++) {
    capitalizedWord += lowercasedWord[i];
  }
  return capitalizedWord;
}
