/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const top = stack.pop();
    const secondFromTop = stack.peek();
    stack.push(top);
    return secondFromTop;
  }

}
