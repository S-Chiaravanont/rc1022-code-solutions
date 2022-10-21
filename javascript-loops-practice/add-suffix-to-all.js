/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var addedSuffixArray = [];
  for (var i = 0; i < words.length; i++) {
    addedSuffixArray.push(words[i] + suffix);
  }
  return addedSuffixArray;
}
