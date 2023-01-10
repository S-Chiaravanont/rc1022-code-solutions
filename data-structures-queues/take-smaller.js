/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const top = queue.dequeue();
  if (queue.peek() === undefined) {
    return top;
  }
  const second = queue.dequeue();
  if (top > second) {
    queue.enqueue(top);
    return second;
  } else if (top < second) {
    queue.enqueue(second);
    return top;
  } else {
    queue.enqueue(second);
    return top;
  }
}
