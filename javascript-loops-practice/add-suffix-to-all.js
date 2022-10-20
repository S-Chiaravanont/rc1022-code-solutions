/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var addedSuffixArray = [];
  for (let i = 0; i < words.length; i++) {
    addedSuffixArray.push(words[i] + suffix);
  }
  return addedSuffixArray;
}
