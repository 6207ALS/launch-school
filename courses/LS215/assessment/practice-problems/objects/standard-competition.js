// LS216 Practice Problems
// Standard Competition Ranking

/*
https://edabit.com/challenge/g2QxB5HCE9hN3PS75

PROBLEM:
Given an object containing the names and scores of 5 competitors, and a 
competitor name, return the rank of that competitor after applying competition 
ranking.

Input: Object, String
Output: Number

Rules:
	- The highest score has a rank value of 1.
	- Assume arguments will ALWAYS be an non-empty object and a string 
		(in that order)
		- Assume object will always have 5 properties (5 competitors)
	- Object keys will always be non-empty strings
	- Object values will always be integers greater or equal to 0.
		- Object can have duplicate values.
		- Properties whose values are the same will have the same ranking.
	- Assume the String argument will always be an existing key value in object
		argument.
		- String argument will always be strictly equal to existing key value in
			object argument.
	- Object argument can be mutated, if needed.

TEST CASES:
competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
}, "Jane") // 4

competition_rank({
  George: 99,
  Emily: 98,
  Susan: 98,
  Jane: 96,
  Brett: 95
}, "Susan") // 2

competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
}, "Bruce") ➞ 3

competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 92,
  Bruce: 92,
  Scott: 92
}, "Bruce") // 2

competition_rank({
  Kate: 96,
  Carol: 92,
  Jess: 92,
  Bruce: 93,
  Scott: 94
}, "Scott") // 5

REQUIREMENTS:
	- Group competitors by their scores
		- competitors with same score are grouped into a set
		- sorted decreasing order
	- Initialize rank tracker (0)
	- For each group, increment rank tracker by 1
	- Determine if String argument is in group
		- If so, return current rank tracker value
	- If group contains multiple people
		- increment rank tracker one more time (to account for skipped rank)
	- Move on to next group.

DATA STRUCTURE:
	Objects
	Arrays => Abstraction methods (sort, filter)


ALGORITHM:
	LET SCORES = RETRIEVE UNIQUE VALUES OF OBJECT
	SORT SCORES IN DECREASING ORDER.
	LET COMPETITORS = RETRIEVE KEYS OF OBJECT ARGUMENT
	
	LET PLACEMENTS = {}
	LET RANK = 0

	FOR EACH SCORE IN SCORES
		RANK++
		LET PLACED = FILTER COMPETITORS ARR WITH COMPETITORS WITH CURRENT SCORE
		IF STRING ARGUMENT IS IN ARRAY OF PLACED COMPETITORS
			RETURN RANK
		
		IF LENGTH OF "PLACED" ARRY IS MORE THAN 1
			RANK++
*/

function competitionRank(results, competitor) {
	let scores = Object.values(results);
	scores = scores.filter((score, index) => scores.indexOf(score) === index)
								 .sort((a, b) => b - a);

	let competitors = Object.keys(results);
	let rank = 0;

	for (let score of scores) {
		rank++;
		let placed = competitors.filter(competitor => results[competitor] === score);
		if (placed.includes(competitor)) console.log(rank);
		if (placed.length > 1) rank++;
	}
}

competitionRank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
}, "Jane") // 4

competitionRank({
  George: 99,
  Emily: 98,
  Susan: 98,
  Jane: 96,
  Brett: 95
}, "Susan") // 2

competitionRank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
}, "Bruce") // 3

competitionRank({
  Kate: 92,
  Carol: 92,
  Jess: 92,
  Bruce: 92,
  Scott: 92
}, "Bruce") // 1

competitionRank({
  Kate: 96,
  Carol: 92,
  Jess: 92,
  Bruce: 93,
  Scott: 94
}, "Scott") // 5