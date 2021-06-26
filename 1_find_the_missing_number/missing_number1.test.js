const missing = require('./missing_number1');

test('Missing number in the array [1, 2, 3, 5] is 4', () => {
  expect(missing([1, 2, 3, 5])).toBe(4);
});

test('Missing number in the array [1, 2, 4, 6, 3, 7, 8] is 5', () => {
  expect(missing([1, 2, 4, 6, 3, 7, 8])).toBe(5);
})
