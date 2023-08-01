// LS216 Practice Problems
// Moving Particles Absorb Each Other after Collisions

/*
https://edabit.com/challenge/LeadHSgaXD3YFQkS6

PROBLEM:
Define a function that takes an array of particles and returns the end state of
the array after all particles have collided.

Input: Array
Output: Array

RULES:
	- Each particle in the array is a postive or negative integer.
		- The absolute integer value represents the mass of the particle.
		- The sign represents the direction in which the particle is moving.
			- Positive: particle is moving to the right.
			- Negative: particle is moving to the left.
	- A positive particle located on the left will collide with a negative particle
		immediately located on the right.
	- The particle with the greater mass will absorb the mass of another particle 
		and continue to travel in its direction.
		- The mass of the combined particle is the sum of the two particles' 
			absolute values.
		- If the negative particle is greater, the combined particle will continue 
			to move to the left
		- If the positive mass is greater OR EQUAL, the combined particle will 
			continue to move to the right.
	- Two particles moving in the same direction cannot collide.
	- The new combined particles can collide again.
	- The equilibrium is reached when all negative values are on the left and all 
		positive values are on the right.

	- Assume the argument will always be a single Array.
		- Assume the array will only contain positive or negative integers as elements.
			- Integer will never be 0.
		- Array can contain duplicate values.
		- Array can be empty -> return [].
		- Array will never be sparse.
		- Array can be mutated, if needed.
		- Array could contain only positive integers.
		- Array could contain only negative integers.
	
TEST CASES:
movingParticles([3, -1]) ➞ [4]
// 3 absorbs -1.

3 -> 3
-1 -> 1

4


movingParticles([-1, 3, -1, 2]) ➞ [-1, 4, 2]
// -1 is moving to the left, 2 is moving to the right, 3 absorbs -1.

[-1, 4, 2]

3 > -1: +4


movingParticles([]) ➞ []
// No particles are in the list.

movingParticles([1]) ➞ [1]
movingParticles([-2]) ➞ [-2]

movingParticles([5, -1, -2, -9]) ➞ [-17]
// 5 absorbs -1, new 6 absorbs -2, new 8 is being absorbed by -9.

[-17]

movingParticles([5, 5, 7, 9]) ➞ [5, 5, 7, 9]

movingParticles([-5, -5, -7, -9]) ➞ [-5, -5, -7, -9]


REQUIREMENTS:
	- keep combining particles until all negative values are on the left and
		all positive values are on the right
	- iterate through each particle of the array
		- particle1 is the current particle
		- particle2 is the next particle
		- if particle1 is positive and particle2 is negative, combine particles
			- if particle1's abs value is greater or equal to than particle2's abs 
				value, resulting particle will be positive
			- if particle1's abs value is less than particle2's abs value, resulting
				particle will be negative.
			- combined particle's value will be the sum of the two absolute values.
			- remove particle1 and particle2 from array.
		- else, continue on to next particle of array.

DATA STRUCTURE:
	- ARRAY

ALGORITHM:

MOVING_PARTICLES(ARR)
	WHILE ARR_ARG NOT IS_EQUILIBRIUM
		FOR I IN RANGE OF (0, PENULTIMATE INDEX OF ARR_ARG)
			LET CURR_PART = ARR[i]
			LET NEXT_PART = ARR[i + 1]

			IF (CURR_PART IS POSITIVE AND NEXT_PART IS NEGATIVE)
				LET COMBINED_PARTICLE = COMBINE_PARTICLE(CURR_PART, NEXT_PART)
				LET FIRST_PORTION = ARR_ARG SLICED FROM INDEX 0 TO I
				LET SECOND_PORTION = ARR_ARG SLICED FROM I + 2 TO END OF ARRAY
				ARR_ARG = FIRST_PORTION CONCATENATED WITH [COMBINED_PARTICLE] AND SECOND PORTION
			ELSE 
				CONTINUE

	RETURN ARR_ARG

IS_EQUILIBRIUM(ARR)
	IF EVERY VALUE IN ARR IS POSITIVE OR EVERY VALUE IN ARR IS NEGATIVE
		RETURN TRUE

	LET FIRST_POSITIVE_INDEX = FIND VALUE IN ARR WHERE VALUE IS POSITIVE
														 RETURN INDEX OF THAT VALUE
	LET LAST_NEGATIVE_INDEX;

	FOR EACH VALUE, INDEX IN ARR
		IF VALUE IS NEGATIVE
			LAST_NEGATIVE_INDEX = INDEX

	FOR EACH VALUE, INDEX IN ARR
		IF VALUE IS POSITIVE
			IF INDEX < FIRST_POSITIVE_INDEX
				RETURN FALSE
		ELSE IF VALUE IS NEGATIVE
			IF INDEX > LAST_NEGATIVE_INDEX
				RETURN FALSE

	RETURN TRUE

COMBINE_PARTICLE(FIRST_PART, SECOND_PART)
	LET MASS = ABS(FIRST_PART) + ABS(SECOND_PART)

	IF FIRST_PART IS GREATER OR EQUAL TO SECOND_PART
		RETURN MASS
	ELSE
		RETURN -MASS
*/

function movingParticles(particles) {
	if (particles.length === 0) return particles;

	while (!isEquilibrium(particles)) {
		for (let i = 0; i < particles.length - 1; i++) {
			let particle1 = particles[i];
			let particle2 = particles[i + 1];
			if (particle1 > 0 && particle2 < 0) {
				let combinedParticle = combineParticles(particle1, particle2);
				let firstPortion = particles.slice(0, i);
				let secondPortion = particles.slice(i + 2);
				particles = firstPortion.concat([combinedParticle], secondPortion);
			}
		}
	}

	return particles;
}

function isEquilibrium(particles) {
	if (particles.every(val => val > 0) || particles.every(val => val < 0)) return true;

	let firstPositiveIndex = particles.indexOf(particles.find(val => val > 0));
	let lastNegativeIndex;

	particles.forEach((val, index) => {
		if (val < 0) lastNegativeIndex = index;
	});

	for (let i = 0; i < particles.length; i++) {
		let particle = particles[i];
		if (particle > 0) {
			if (i < lastNegativeIndex) return false;
		} else if (particle < 0) {
			if (i > firstPositiveIndex) return false;
		}
	}

	return true;
}

function combineParticles(particle1, particle2) {
	let mass = Math.abs(particle1) + Math.abs(particle2);

	return Math.abs(particle1) >= Math.abs(particle2) ? mass : -mass;
}

p = console.log;

p(movingParticles([3, -1])) // ➞ [4]
// 3 absorbs -1.

p(movingParticles([-1, 3, -1, 2])) // ➞ [-1, 4, 2]
// -1 is moving to the left, 2 is moving to the right, 3 absorbs -1.

p(movingParticles([])) // ➞ []
// No particles are in the list.

p(movingParticles([5, -1, -2, -9])) // ➞ [-17]
// 5 absorbs -1, new 6 absorbs -2, new 8 is being absorbed by -9.