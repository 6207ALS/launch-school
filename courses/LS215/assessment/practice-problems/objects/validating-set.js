// LS216 Practice Problems
// Validating Set in a Game

/*
https://edabit.com/challenge/278bzxEFeTKNiKXfM

PROBLEM:
Write a function that determines whether three cards constitute a valid set.

Input: Array (of Objects)
Output: Boolean

Rules:
	- Three cards form a set if each of the cards are identical or completely 
		different for each of the four properties. All three cards must:
		- Have the same color or different colors.
		- Have the same number or different numbers.
		- Have the same shades or different shades.
		- Have the same shape or different shapes.
		- A set cannot have 2/3 cards having the same property. Either all must 
			share that property, or none will share that particular property.

	- The four properties are:
		- Colors: red, purple, green
		- Numbers: 1, 2, 3
		- Shades: empty, lined, full
		- Shapes: squiggle, oval, diamond

	- Assume the array objects will always have the four properties.

	- Assume the four properties will always be one of their three possible values
	- Assume the four properties' values will always be the following data types:
		- color: "string"
		- number: Number
		- shade: "string"
		- shape: "string"
	- Assume the array argument will always contain three cards (objects)
	- Assume the array argument will never be sparse.
	- Array argument can be mutated, if needed. 

TEST CASES:

isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) ➞ false


REQUIREMENTS:
	- Iterate through the four properties (color, number, shade, shape) for the
		cards
	- Compare the cards' values for each property
		- If the values are all the same, continue to next property
		- If the values are all different, continue to next property
		- Else, return false

	- If all properties are all the same or entirely different for all cards, 
		return true.

DATA STRUCTURE:
	Objects

ALGORITHM:
	LET CARD_A = FIRST CARD IN ARR ARGUMENT
	LET CARD_B = SECOND CARD
	LET CARD_C = THIRD CARD
	LET PROPERTIES = ["color", "number", "shade", "shape"]

	FOR EACH PROPERTY IN PROPERTIES
		IF (CARD_A[PROPERTY] === CARD_B[PROPERTY] && CARD_B[PROPERTY] === CARD_C[PROPERTY]) {
			CONTINUE TO NEXT PROPERTY
		} ELSE IF (CARD_A[PROPERTY] !== CARD_B[PROPERTY] 
							 && CARD_B[PROPERTY] !== CARD_A[PROPERTY]
							 && CARD_A[PROPERTY] !== CARD_C[PROPERTY]) {
			CONTINUE TO NEXT PROPERTY
		} ELSE {
			RETURN FALSE
		}

	RETURN TRUE
*/

function isSet(cards) {
	let [cardA, cardB, cardC] = cards;
	let properties = ["color", "number", "shade", "shape"];

	for (let property of properties) {
		if (cardA[property] === cardB[property] && cardB[property] === cardC[property]) {
			continue;
		} else if (cardA[property] !== cardB[property]
							 && cardB[property] !== cardC[property]
							 && cardC[property] !== cardA[property]) {
			continue;
	  } else {
			return false;
		}
	}

	return true;
}

p = console.log;

p(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]));

p(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]));

p(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]));