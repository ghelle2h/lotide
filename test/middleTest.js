const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const numbers = [1, 2, 3, 4, 5, 6, 7];
middle(numbers);
assertArraysEqual([2], middle([1, 2, 3])) // => [2]
assertArraysEqual([1,2], middle([1, 2, 3, 4, 5]));