// LS216 Practice Problems
// Premier League Champions

/*
PROBLEM:
Create a function that takes an array of football clubs with properties: 
name, wins, loss, draws, scored, conceded, and returns the team name with the 
highest number of points. 

Input: Array (of Objects)
Output: String

Rules:
	- Total Points = (3 * wins) + (0 * loss) + (1 * draws)
	- If two teams have the same number of points, return the team with the 
		largest goal difference.
		- Goal Difference = scored - conceded
	- Assume multiple teams can have the same number of highest points.
	- Assume only one team can have the highest goalDifference
	- Assume all expected properties will exist in objects of array
		- Assume (wins, loss, draws, scored, conceded) properties will all have
			values of integers greater or equal to 0.
		- "name" property of objects will always be a non-empty string.
	- Array argument will never be sparse.
	- Array argument / Object elements can be mutated if needed.
	- Array argument will always contain at least one object.

TEST CASES:
champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
])
➞ "Manchester United"

champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
])
➞ "Manchester United"

champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 30,
    loss: 8,
    draws: 5,
    scored: 98,
    conceded: 29,
  },
]) 
➞ "Chelsea"

REQUIREMENTS:
	- Iterate through each team in array argument
		- Keep record of team with highest total points
	
	- Determine team(s) with highest total points
	- If only one team has highest total points, return that team name
	- If multiple teams has highest total points, iterate through each team of 
		those teams
			- Keep record of team with largest goal difference
		
	Return team with largest goal difference.

DATA STRUCTURE:
	Objects
	Array - Abstraction Methods -> Map, Filter

ALGORITHM:
	FOR EACH TEAM IN ARRAY ARG
		TEAM[totalPoints] = TOTAL POINTS FORMULA
		TEAM[goalDifference] = GOAL DIFFERENCE FORMULA

	LET BEST_TEAMS = FILTER ARRAY ARG WITH TEAMS WITH HIGHEST TOTAL POINTS

	IF LENGTH OF BEST_TEAMS IS ONE
		RETURN TEAM NAME OF THAT ONE TEAM
	ELSE
		FILTER BEST_TEAMS WITH TEAM WITH HIGHEST GOAL DIFFERENCE
		RETURN THE ONE TEAM
*/

function champions(teams) {
	teams.forEach(team => {
		team["totalPoints"] = (3 * team["wins"]) + (0 * team["loss"]) + (1 * team["draws"]);
		team["goalDifference"] = team["scored"] - team["conceded"];
	});

	let highestScore = Math.max(...teams.map(team => team["totalPoints"]));
	let bestTeams = teams.filter(team => team["totalPoints"] === highestScore);
	
	if (bestTeams.length === 1) {
		return bestTeams[0];
	} else {
		let highestGoalDifference = Math.max(...teams.map(team => team["goalDifference"]));
		return teams.find(team => team["goalDifference"] === highestGoalDifference);
	}
}

p = console.log;

p(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
]))

p(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
]))

p(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 97,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 30,
    loss: 8,
    draws: 5,
    scored: 98,
    conceded: 29,
  },
]))