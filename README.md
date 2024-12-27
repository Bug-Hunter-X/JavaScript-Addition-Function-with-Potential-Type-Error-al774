# JavaScript Addition Function Bug

This repository demonstrates a common bug in JavaScript involving type checking before performing arithmetic operations.

The `foo` function adds two numbers. However, it lacks robust error handling for non-numeric input, leading to a potential `TypeError`.

## Bug Description

The `foo` function fails to check if the input parameters (`a` and `b`) are numbers before performing addition.  If either parameter is not a number (e.g., `null`, `undefined`, a string), a `TypeError` will be thrown.

## Solution

The provided solution adds type checking using `typeof` to ensure both inputs are numbers before performing the addition. If either input is not a number, the function returns `NaN` to indicate an invalid operation.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Run the `bug.js` file in a JavaScript environment (browser console or Node.js).
4. Call `foo` with non-numeric arguments to observe the error.
5. Compare to the corrected version in `bugSolution.js`
