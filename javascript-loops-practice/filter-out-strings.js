/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStringArray = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStringArray.push(values[i]);
    }
  }
  return noStringArray;
}
