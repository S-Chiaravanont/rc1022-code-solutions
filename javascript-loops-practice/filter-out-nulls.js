/* exported filterOutNulls */
function filterOutNulls(values) {
  var noNullArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNullArray.push(values[i]);
    }
  }
  return noNullArray;
}
