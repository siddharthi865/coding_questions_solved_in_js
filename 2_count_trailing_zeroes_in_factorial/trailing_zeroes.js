/*
  Given an integer n, write a function that returns count of trailing zeroes in n!. 
  Examples : 

  Input: n = 5
  Output: 1 
  Factorial of 5 is 120 which has one trailing 0.

  Input: n = 20
  Output: 4
  Factorial of 20 is 2432902008176640000 which has
  4 trailing zeroes.

  Input: n = 100
  Output: 24
*/

function trailing_zeroes(num) {
  if (num < 0) {
    return -1;
  }

  let count = 0;

  for (let i = 5; Math.floor(num/i) >= 1; i *= 5) {
    count += Math.floor(num/i);
  }

  return count;
}

module.exports = trailing_zeroes;