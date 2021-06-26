const findMajority = require('./majority_element1');

test('majority element in the array [ 1, 1, 2, 1, 3, 5, 1 ] is 1', () => {
  expect(findMajority([ 1, 1, 2, 1, 3, 5, 1 ])).toBe(1);
})

test('majority element in the array [ 3, 3, 4, 2, 4, 4, 2, 4, 4 ] is 4', () => {
  expect(findMajority([ 3, 3, 4, 2, 4, 4, 2, 4, 4 ])).toBe(4);
})

test('majority element in the array [ 3, 3, 4, 2, 4, 4, 2, 4 ] is "No Majority Element"', () => {
  expect(findMajority([ 3, 3, 4, 2, 4, 4, 2, 4 ])).toBe("No Majority Element");
})
