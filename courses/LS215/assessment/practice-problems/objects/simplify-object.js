// LS216 Practice Problems
// Simplify an Object by Two Properties

/*
https://edabit.com/challenge/9ZZ2zGwgPfbAxQa86

PROBLEM:
Define a function that, given an array of objects, returns an array of the
objects collapsed by their common "name" and "brand" properties.

Input: Array (of Objects)
Output: Array (of Objects)

Rules:
	- There will always be one or more element in the given array.
	- Each element will always have a brand and name property.
		- Both property values will always be non-empty strings.
	- All duplicates will be displayed in order.
	- Assume a single array argument will always be provided.
		- Assume the array argument will never be sparse.
		- The array argument can be mutated.
	- Duplicate items must strictly equal: "name" and "brand" properties
		- Case-sensitive
		- Whitespace-sensitive
	- Non-primitive data types can be mutated.

TEST CASES:

simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
])

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
// ]

simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
])

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
// ]

simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
	{ brand: "nars", name: "Cosmetics Voyageur Pallete" },
])

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
//   { brand: "nars", name: "Cosmetics Voyageur Pallete", count: 1 },
// ]

simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
	{ brand: "NARS", name: "cosmetics voyageur pallete" },
])

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
//   { brand: "nars", name: "cosmetics voyageur pallete", count: 1 },
// ]

REQUIREMENTS:
	- Iterate through each item in array
		- Keep record of every unique item
			- Unique item: "brand" and "name" property completely unique from other items
	
	- For each unique item, determine how many duplicates exist in array
		- Add "count" property to object.
		- Push object to result array.

DATA STRUCTURE:
	Array -> Abstraction Methods (Filter)

ALGORITHM:
	LET UNIQUE = [];

	FOR EACH ITEM IN ARRAY ARG
		IF NONE OF OBJECTS IN UNIQUE HAS SAME "brand" AND "name" PROPERTY VALUES
			PUSH ITEM TO UNIQUE
	
	LET RESULT = []

	FOR EACH ITEM IN UNIQUE
		LET COUNT = LENGTH OF (FILTER ARRAY ARG WITH ONLY DUPLICATES OF CURRENT ITEM)
		ASSIGN COUNT AS PROPERTY VALUE TO ITEM
		PUSH ITEM TO RESULT
	
	RETURN RESULT
*/

function simplifyList(items) {
	let uniques = [];

	function exists(item) {
		return (uniques.find(object => {
			return (object["brand"] === item["brand"] && object["name"] === item["name"]);
		}))
	}

	for (let item of items) {
		if (!exists(item)) uniques.push(item);
	}

	let result = [];

	for (let unique of uniques) {
		let count = items.filter(item => {
			return (item["name"] === unique["name"] && item["brand"] === unique["brand"]);
		}).length;

		unique.count = count;
		result.push(unique);
	}

	return result;
}

p = console.log;

p(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]))

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
// ]

p(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
]))

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
// ]

p(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
	{ brand: "nars", name: "Cosmetics Voyageur Pallete" },
]))

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
//   { brand: "nars", name: "Cosmetics Voyageur Pallete", count: 1 },
// ]

p(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
	{ brand: "NARS", name: "cosmetics voyageur pallete" },
]))

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
//   { brand: "nars", name: "cosmetics voyageur pallete", count: 1 },
// ]