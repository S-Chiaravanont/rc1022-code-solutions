/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  var newList = new LinkedList(value);
  const next = list;
  newList.next = next;
  return newList;
}
