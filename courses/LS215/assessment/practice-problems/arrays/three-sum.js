// LS216 Practice Problems
// Three Sum Problem

/*


*/

function threeSum(nums) {
	if (nums.length < 3) return [];

	let sets = [];

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let z = j + 1; z < nums.length; z++) {
				let sum = nums[i] + nums[j] + nums[z];
				if (sum === 0) {
					let currentSet = [nums[i], nums[j], nums[z]].sort((a, b) => a - b);
					let setExists = sets.some(set => {
						set = set.slice().sort((a, b) => a - b);
						return set.every((value, index) => value === currentSet[index]);
					})

					if (!setExists) sets.push([nums[i], nums[j], nums[z]]);
				};
			}
		}
	}

	return sets.sort((setA, setB) => setA[0] - setB[0]);
}

p = console.log;

p(threeSum([0, 1, -1, -1, 2])) // ➞ [[0, 1, -1], [-1, -1, 2]]

p(threeSum([0, 0, 0, 5, -5])) // ➞ [[0, 0, 0], [0, 5, -5]]

p(threeSum([1, 2, 3])) // ➞ []

p(threeSum([1])) // ➞ []