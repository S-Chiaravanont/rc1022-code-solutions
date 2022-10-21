/* exported swapChars */

/*
- create new string that store input string at index[firstIndex]
- create another string that store input string at index[secondIndex]
- use String.slice(startIndex, endIndex)
- return string.slice(0, firstIndex -1) + newString2 + string.slice(firstIndex + 1, secondIndex - 1) + newString1 + string.slice(secondIndex+1)

ERROR... seems to repeat itself and when input index is 0 then -1 number will give out bad result

- create new string that store input string at index[firstIndex]
- create another string that store input string at index[secondIndex]
- create new empty string
- use for loop to iterate through each letter of string
- if i === firstIndex then concat newString2 to new string
- else if i === secondIndex then concat newString1 to new string
- else concat string[i] to new string
- return string
*/

function swapChars(firstIndex, secondIndex, string) {
  var newString1 = string[firstIndex];
  var newString2 = string[secondIndex];
  // console.log(newString1 + ' string 1');
  // console.log(newString2 + ' string 2');
  var swapCharsString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapCharsString += newString2;
    } else if (i === secondIndex) {
      swapCharsString += newString1;
    } else {
      swapCharsString += string[i];
    }
  }
  return swapCharsString;
}
