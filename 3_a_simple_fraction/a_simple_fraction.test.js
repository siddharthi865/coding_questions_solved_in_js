const fraction = require('./a_simple_fraction')

test('Result of 50 as numerator and 22 as denominator is 2.(27)', () => {
  expect(fraction(50,22)).toEqual('2.(27)');
})

test('Number of trailing zeroes in the factorial of 20 is 4', () => {
  expect(fraction(-1,2)).toEqual('-0.5');
})
