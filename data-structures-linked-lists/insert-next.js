/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const second = new LinkedList(value);
  const third = list.next;
  list.next = second;
  list.next.next = third;
}
