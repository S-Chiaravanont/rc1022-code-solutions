/* exported zip */

/*
- compare length of first array to second array and set the smaller number to a variable coupleAmount
- create new empty array zipArray
- use for loop with condition i = 0 going up to coupleAmount
- create new temporary empty array coupleArray
- push first[i] to coupleArray
- push second[i] to coupleArray
- push coupleArray to zipArray
- return zipArray
*/

function zip(first, second) {
  var coupleAmount = null;
  if (first.length < second.length) {
    coupleAmount = first.length;
  } else {
    coupleAmount = second.length;
  }
  var zipArray = [];
  for (var i = 0; i < coupleAmount; i++) {
    var coupleArray = [];
    coupleArray.push(first[i]);
    coupleArray.push(second[i]);
    zipArray.push(coupleArray);
  }
  return zipArray;
}
