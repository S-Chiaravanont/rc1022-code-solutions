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

function titleCase(title) {
  var titleArray = title.toLowerCase().split(' ');

  var isMinorWordIndexes = [];
  var isWordWithColonIndexes = [];
  var isJavaScriptColon = [];
  var isHyphenWordIndexes = [];
  for (var i = 0; i < titleArray.length; i++) {
    // check for minor word and append index at which minor is found
    if (minorWords.includes(titleArray[i])) {
      isMinorWordIndexes.push(i);
    }
    // check for colon (:) and append index at which colon is found + 1 to mark the next adjacent word required capitalized
    if (titleArray[i].includes(':')) {
      isWordWithColonIndexes.push(i + 1);
    }
    // check if word is javascript: and append index at which javascript is found
    if (titleArray[i] === 'javascript:') {
      isJavaScriptColon.push(i);
    }
    // check if word has hyphen (-) and append index at which hypen-word is found
    if (titleArray[i].includes('-')) {
      isHyphenWordIndexes.push(i);
    }
  }

  // first word ALWAYS get capitalized unless it's JavaScript:
  var titledSentence = '';
  if (!isJavaScriptColon.includes(0)) {
    titledSentence += titleArray[0][0].toUpperCase() + titleArray[0].slice(1);
  } else {
    titledSentence += 'JavaScript:';
  }

  // Loop through the rest of the words in the array to concat to the final string
  // starting at index 1 because index 0 is taken care of in step above
  for (var j = 1; j < titleArray.length; j++) {
    // need boolean to keep track whether to capitalize first letter of the current word in iteration
    var yesCapitalize = true;
    // checking if this index is in isMinorWordIndex
    if (isMinorWordIndexes.includes(j)) {
      yesCapitalize = false;
    }
    // checking if this index need capitalize because previous index has colon
    if (isWordWithColonIndexes.includes(j)) {
      yesCapitalize = true;
    }
    if (titleArray[j] === 'javascript') { // checking if current word is javascript
      titledSentence += ' JavaScript';
    } else if (titleArray[j] === 'api') { // checking if current word is API
      titledSentence += ' API';
    } else if (titleArray[j] === 'javascript:') { // check if current word is javascript:
      titledSentence += ' JavaScript:';
    } else if (isHyphenWordIndexes.includes(j)) { // check if current index is included in hyphen index array
      var beforeHyphenWord = titleArray[j].split('-')[0];
      var afterHyphenWord = titleArray[j].split('-')[1];
      titledSentence += ' ' + beforeHyphenWord[0].toUpperCase() + beforeHyphenWord.slice(1) + '-' + afterHyphenWord[0].toUpperCase() + afterHyphenWord.slice(1);
    } else if (yesCapitalize) { // condition checking if the current word need to be capitalize depending on boolean yesCapitalize
      // if need to capitalize
      titledSentence += ' ' + titleArray[j][0].toUpperCase() + titleArray[j].slice(1);
    } else {
      // if not need to capitalize
      titledSentence += ' ' + titleArray[j];
    }
  }

  return titledSentence;
}
