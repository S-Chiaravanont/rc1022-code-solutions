/* exported chunk */

/*
- check if input array is empty -> if yes, return empty array []
- create new empty array chunkArray
- find out how many sub array we need -> Math.ceil(array.length / size)
- for example input array has 5 items size wanted is 2 -> 5/2 = 2.5 -> Math.ceil would bring this up to 3 group of array
- with for loop, push empty array this many times
- create an arrayCounter with initial value of 0
- create an itemCounter with initial value of 0
- use for loop to go through every single item of the input array
- check if current itemCounter is less than size -> starting is 0 < size
- then push array[currentIndex "j"] to chunkArray[arrayCounter] -> starting would be chunkArray[0].push(array[0])
- then add 1 to itemCounter
- else (if current itemCount is equal or greater than size)
- then we reset itemCounter to 1 (because after else is run the next array already have 1 item in here)
- and add 1 to arrayCounter to move onto the next chunkArray index
- then push array[currentIndex "j"] to chunkArray at new arrayCounter -> chunkArray[1].push(array[j])
- return chunkArray

----Alternate way with slice function-----

function chunk(array, size) {
  if (array.length === 0) {
    return [];
  }
  var chunkArray = [];
  var arrayCount = Math.ceil(array.length / size);
  chunkArray.push(array.slice(0, size));
  for (var i = 1; i < arrayCount; i++) {
    chunkArray.push(array.slice(size * i, size * (i + 1)));
  }
  return chunkArray;
}
*/

function chunk(array, size) {
  if (array.length === 0) {
    return [];
  }
  var chunkArray = [];
  for (var i = 0; i < Math.ceil(array.length / size); i++) {
    chunkArray.push([]);
  }
  var arrayCounter = 0;
  var itemCounter = 0;
  for (var j = 0; j < array.length; j++) {
    if (itemCounter < size) {
      chunkArray[arrayCounter].push(array[j]);
      itemCounter++;
    } else {
      itemCounter = 1;
      arrayCounter++;
      chunkArray[arrayCounter].push(array[j]);
    }
  }
  return chunkArray;
}
