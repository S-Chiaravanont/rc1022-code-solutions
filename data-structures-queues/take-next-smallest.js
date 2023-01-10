/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let top = queue.dequeue();
  if (queue.peek() === undefined) {
    return top;
  }
  while (top > queue.peek()) {
    queue.enqueue(top);
    top = queue.dequeue();
  }
  return top;
}
