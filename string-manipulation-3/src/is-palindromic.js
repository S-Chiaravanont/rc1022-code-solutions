/* exported isPalindromic */

/*
- create new array variable and assign input string with .split(' ') method to get rid of spaces
- create new string variable and assign new array with .join() to concat the words together into 1 big word
- create new variable counterForward -> that can be incremented starting at 0
- create another variable counterBackward -> that can be reduced starting at final index (string.length - 1)
- get half the length of the string for number of iteration required in loop condition -> .floor() to round down for Odd #
- use for loop to loop through the string
- each iteration compare string[counterForward] !== string[counterBackward]
- increment counterForward by 1 & reduce counterBackward by 1 after if statement but within for loop
- if it doesn't match -> return false
- after the loop -> return true (this condition is met only if all the letters are matched)
*/

function isPalindromic(string) {
  var splitArray = string.split(' ');
  var wordsJoin = splitArray.join('');
  var counterForward = 0;
  var counterBackward = wordsJoin.length - 1;
  var halfWay = Math.floor(wordsJoin.length / 2);
  for (var i = 0; i < halfWay; i++) {
    if (wordsJoin[counterForward] !== wordsJoin[counterBackward]) {
      return false;
    }
    counterForward++;
    counterBackward--;
  }
  return true;
}
