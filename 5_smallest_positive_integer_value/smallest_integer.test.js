const findSmallest = require('./smallest_integer');

test('smallest positive integer value that cannot be represented as sum of any subset of the given array [ 1, 3, 4, 5 ] is 2', () => {
  expect(findSmallest([ 1, 3, 4, 5 ])).toBe(2);
});

test('smallest positive integer value that cannot be represented as sum of any subset of the given array [ 1, 2, 6, 10, 11, 15 ] is 4', () => {
  expect(findSmallest([ 1, 2, 6, 10, 11, 15 ])).toBe(4);
});

test('smallest positive integer value that cannot be represented as sum of any subset of the given array [ 1, 1, 1, 1 ] is 5', () => {
  expect(findSmallest([ 1, 1, 1, 1 ])).toBe(5);
});

test('smallest positive integer value that cannot be represented as sum of any subset of the given array [ 1, 1, 3, 4 ] is 10', () => {
  expect(findSmallest([ 1, 1, 3, 4 ])).toBe(10);
});