/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return Infinity * -1;
  }
  let maxValue = stack.peek();
  while (stack.peek() !== undefined) {
    stack.pop();
    if (maxValue < stack.peek()) {
      maxValue = stack.peek();
    }
  }
  return maxValue;
}
