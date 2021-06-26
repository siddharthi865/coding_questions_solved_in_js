// javascript program to find the smallest positive value that cannot be
// represented as sum of subsets of a given sorted array

	// Returns the smallest number that cannot be represented as sum
	// of subset of elements from set represented by sorted array arr[0..n-1]
	function findSmallest(arr)
	{
    let n = arr.length;
		var res = 1; // Initialize result

		// Traverse the array and increment 'res' if arr[i] is
		// smaller than or equal to 'res'.
		for (i = 0; i < n && arr[i] <= res; i++)
			res = res + arr[i];

		return res;
	}

module.exports = findSmallest;
