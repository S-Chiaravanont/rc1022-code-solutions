/* exported truncate */

/*
- check if input string.length is 0 or input string === '' -> if yes return '...'
- check if input length is larger than string.length -> if yes return string + '...'
- create new empty string
- use for loop to loop over the string with condition i < input length
- in each iteration, concat string[i] to new string
- return new string concat with '...'
*/

function truncate(length, string) {
  if (string === '') {
    return '...';
  }
  if (length > string.length) {
    return string + '...';
  }
  var truncateString = '';
  for (var i = 0; i < length; i++) {
    truncateString += string[i];
  }
  return truncateString + '...';
}
