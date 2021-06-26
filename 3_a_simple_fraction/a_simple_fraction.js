// JavaScript program to calculate
// fraction of two numbers

// Function to return the required fraction
// in string format
function calculateFraction(num, den)
{
	// If the numerator is zero, answer is 0
	if (num == 0)
		return "0";

	// If any one (out of numerator and denominator)
	// is -ve, sign of resultant answer -ve.
	var sign = (num < 0) ^ (den < 0) ? -1 : 1;

	num = Math.abs(num);
	den = Math.abs(den);

	// Calculate the absolute part
	// (before decimal point).
	var initial = parseInt(num / den);

	// Output string to store the answer
	var res = [];

	// Append sign
	if (sign == -1)
		res.push("-");

	// Append the initial part
	res.push(initial.toString());

	// If completely divisible, return answer.
	if (num % den == 0)
		return res;

	res.push(".");

	// Initialize Remainder
	var rem = num % den;
	var mp = new Map();

	// Position at which fraction starts repeating
	// if it exists
	var index;
	var repeating = false;
	while (rem > 0 && !repeating) {

		// If this remainder is already seen,
		// then there exists a repeating fraction.
		if (mp.has(rem)) {

			// Index to insert parentheses
			index = mp.get(rem);
			repeating = true;
			break;
		}
		else
			mp.set(rem, res.length);

		rem = rem * 10;

		// Calculate quotient, append
		// it to result and
		// calculate next remainder
		var temp = parseInt(rem / den);
		res.push(temp.toString());
		rem = rem % den;
	}

	// If repeating fraction exists,
	// insert parentheses.
	if (repeating) {
		res.push(")");
		res.splice(index,0, "(");
	}

	// Return result.
	return res.join('');
}

module.exports = calculateFraction;