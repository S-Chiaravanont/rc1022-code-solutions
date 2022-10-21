/* exported oddOrEven */
function oddOrEven(numbers) {
  var evenOddArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenOddArray.push('even');
    } else {
      evenOddArray.push('odd');
    }
  }
  return evenOddArray;
}
