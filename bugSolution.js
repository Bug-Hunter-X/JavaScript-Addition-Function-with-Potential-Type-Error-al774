function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Return NaN if input is not a number
  }
  return a + b;
}