/* exported countdown */
function countdown(number) {
  var numbArray = [];
  for (let i = 0; i <= number; i++) {
    numbArray.push(number - i);
  }
  return numbArray;
}
