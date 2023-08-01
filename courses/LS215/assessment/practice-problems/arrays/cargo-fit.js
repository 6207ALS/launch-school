// LS216 Practice Problems
// Does the Cargo Fit? (Part 2)

/*
https://edabit.com/challenge/yX8HRSfdHjKji8ikf

PROBLEM:


*/

function willFit(types, weights) {
	const TYPES_CAPACITY = {
		"S": 50,
		"M": 100,
		"L": 200
	};

	let typesWeights = types.map(type => TYPES_CAPACITY[type]);
	let totalTypesWeight = typesWeights.reduce((acc, val) => acc + val);
	let totalCargoWeight = weights.reduce((acc, val) => acc + val);
	
	return totalTypesWeight >= totalCargoWeight;
}

p = console.log;

p(willFit(["M", "L", "L", "M"], [56, 62, 84, 90])) // ➞ true

p(willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200])) // ➞ false

p(willFit(["L", "L", "M"], [56, 62, 84, 90])) // ➞ true

p(willFit(["M", "L", "L", "M"], [56, 62, 84, 90])); // true
p(willFit(["L", "L", "M"], [56, 62, 84, 90])) // true
p(willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200])) // false
p(willFit(["S", "L"], [73 , 87, 95, 229])) // false
p(willFit(["L", "L", "L", "L"], [54, 54, 200, 200, 200])) // true