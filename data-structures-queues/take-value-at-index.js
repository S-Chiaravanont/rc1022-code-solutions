/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let count = 0;
  while (count < index) {
    count++;
    const top = queue.dequeue();
    queue.enqueue(top);
  }
  return queue.dequeue();
}
