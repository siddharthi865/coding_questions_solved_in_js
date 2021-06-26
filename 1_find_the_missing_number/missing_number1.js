/*
  You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in the list. One of the integers is missing in the list. Write an efficient code to find the missing integer.

  Example: 

  Input: arr[] = {1, 2, 4, 6, 3, 7, 8}
  Output: 5
  Explanation: The missing number from 1 to 8 is 5

  Input: arr[] = {1, 2, 3, 5}
  Output: 4
  Explanation: The missing number from 1 to 5 is 4
 */
function getMissingNumber(arr) {
  let n = arr.length;

  let total = Math.floor(((n+1) * (n+2)) / 2)

  for (let i = 0; i < n; i++) {
    total -= arr[i];
  }
  return total;
}

console.log(getMissingNumber([1,4,3,2]));

module.exports = getMissingNumber;