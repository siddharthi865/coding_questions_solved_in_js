const trailing_zeroes = require('./trailing_zeroes')

test('Number of trailing zeroes in the factorial of 5 is 1', () => {
  expect(trailing_zeroes(5)).toBe(1);
})

test('Number of trailing zeroes in the factorial of 20 is 4', () => {
  expect(trailing_zeroes(20)).toBe(4);
})

test('Number of trailing zeroes in the factorial of 100 is 24', () => {
  expect(trailing_zeroes(100)).toBe(24);
})
