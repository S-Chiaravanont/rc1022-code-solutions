/*
- get DOM for all span elements
- create new empty array to store all SPAN textContent
- set up eventListener to document DOM for keydown
- check user input
- check if user input is the same letter as the current letter
- using nodeList[i].textContent to get current letter
- if true -> update the current letter class attribute to include new css rule (switch to correct color)
- set counter++
- set next letter class attribute to include new css rule (underline)
- if false -> set current letter class attribute to include new css rule (switch to incorrect color)
*/

var $spanElements = document.querySelectorAll('span');
var keys = [];
for (var i = 0; i < $spanElements.length; i++) {
  keys.push($spanElements[i].textContent);
}
document.addEventListener('keydown', onKeyDown);

var counter = 0;

function onKeyDown(event) {
  if (event.key === keys[counter]) {
    $spanElements[counter].className = 'correct-key';
    counter++;
    if (counter < keys.length) {
      $spanElements[counter].className = 'underline';
    }
  } else {
    $spanElements[counter].className = 'wrong-key underline';
  }
}
