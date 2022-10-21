/* exported countdown */
function countdown(number) {
  var numbArray = [];
  for (var i = 0; i <= number; i++) {
    numbArray.push(number - i);
  }
  return numbArray;
}
