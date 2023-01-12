/* exported getLength */

function getLength(list) {
  let counter = 0;
  while (list) {
    counter++;
    list = list.next;
  }
  return counter;
}
