/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const third = list.next.next;
  list.next = third;
}
