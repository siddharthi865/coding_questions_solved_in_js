const findNthNumber = require('./nth_natural_no')

test('9th Natural number after excluding all numbers containing 9 is 10', () => {
  expect(findNthNumber(9)).toBe(10);
})

test('8th Natural number after excluding all numbers containing 9 is 8', () => {
  expect(findNthNumber(8)).toBe(8);
})

test('26th Natural number after excluding all numbers containing 9 is 30', () => {
  expect(findNthNumber(27)).toBe(30);
})
