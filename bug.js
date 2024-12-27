function foo(a, b) {
  if (a === null || b === null) {
    return null;
  }

  return a + b; //Bug: this line will cause an error if a or b is not a number
}