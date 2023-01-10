/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  var newList = new LinkedList(value);
  const data = list.data;
  newList.data = data;
  // console.log('data', newList.data);
  // console.log('value', value);
  return newList;
}
