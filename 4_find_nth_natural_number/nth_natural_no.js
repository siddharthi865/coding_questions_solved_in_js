// Javascript implementataion of above approach
	
	// Function to find Nth number in base 9
	function findNthNumber(N)
	{
	// Stores the Nth number
	let result = 0;

	let p = 1;

	// Iterate while N is
	// greater than 0
	while (N > 0) {

		// Update result
		result += (p * (N % 9));

		// Divide N by 9
		N = parseInt(N / 9, 10);

		// Multiply p by 10
		p = p * 10;
	}

	// Return result
	return result;
	}
	
	let N = 9;
	console.log(findNthNumber(N));

module.exports = findNthNumber;