/* exported titleCase */

/*
- create an array of minor words
- create variable for correct JavaScript capitalized
- create variable for lower case JavaScript for condition
- create variable for correct API capitalized
- create variable for lower case API for condition
- need to find out if individual word ends with colon so the next adjacent word will always get capitalized
------------------
- assuming input title letters are all lower case -- wrong, need to lowercase input sentence
- Split input title with space to into a new array
*/

var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
var javaScript = 'JavaScript';
var lowerCaseJavaScript = 'javascript';
var acronymAPI = 'API';
var lowerCaseAPI = 'api';
var colonLetter = ':';

function titleCase(title) {
  var titleArray = title.toLowerCase().split(' ');
  // console.log(titleArray);

  var isMinorWordIndexes = [];
  var isWordWithColonIndex = [];
  for (var i = 0; i < titleArray.length; i++) {
    // check for minor word and append index at which minor is found
    if (Array.prototype.includes.call(minorWords, titleArray[i])) {
      isMinorWordIndexes.push(i);
    }
    // check for colon (:) and append index at which colon is found + 1 to mark the adjacent word required capitalized
    if (titleArray[i].includes(colonLetter)) {
      isWordWithColonIndex.push(i + 1);
      // console.log(titleArray[i]);
    }
  }
  // console.log('minor word array:', isMinorWordIndexes);
  // console.log('colon index array:', isWordWithColonIndex);

  // first word ALWAYS get capitalized
  var titledSentence = '';
  titledSentence += titleArray[0][0].toUpperCase() + titleArray[0].slice(1);
  // console.log(titledSentence);

  // Loop through the rest of the words in the array to concat to the final string
  // starting at index 1 because index 0 is taken care of in step above
  for (var j = 1; j < titleArray.length; j++) {
    // need boolean to keep track whether to capitalize first letter of the current word in iteration
    var yesCapitalize = true;
    // checking if this index is in isMinorWordIndex
    if (Array.prototype.includes.call(isMinorWordIndexes, j)) {
      yesCapitalize = false;
    }
    // checking if this index need capitalize because previous index has colon
    if (Array.prototype.includes.call(isWordWithColonIndex, j)) {
      yesCapitalize = true;
    }
    // checking if current word is javascript
    if (titleArray[j] === lowerCaseJavaScript) {
      titledSentence += ' ' + javaScript;
    } else if (titleArray[j] === lowerCaseAPI) { // checking if current word is API
      titledSentence += ' ' + acronymAPI;
    } else if (yesCapitalize) {
      // condition checking if the current word need to be capitalize depending on boolean yesCapitalize
      // if need to capitalize
      titledSentence += ' ' + titleArray[j][0].toUpperCase() + titleArray[j].slice(1);
    } else {
      // if not need to capitalize
      titledSentence += ' ' + titleArray[j];
    }
  }

  return titledSentence;
}
