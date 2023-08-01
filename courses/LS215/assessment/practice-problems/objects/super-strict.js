// LS216 Practice Problems
// Super Strict Grading

/*
PROBLEM:
Given an object literal of student names and an array of their test scores over 
the semester, return a list of all the students who passed the course.

Input: Object
Output: Array (of Strings)

Rules:
	- Returned array should be sorted (in alphabetical order)
	- All of a student's test scores must be 100% to pass.
	- Assume argument will always be a single object.
		- Object argument could be empty.
			- Return empty array: []
		- Every object key is considered a unique student.
			- Key property will never be an empty string.
		-	Assume every object value will be an array of strings.
			- Array will never be empty; will always have at least 1 "mark"
			- Array will never be sparse.
			- Strings will always be in a certain format: "[NUMBER]/[NUMBER]"
				- First number will never be greater than second number.
	- Non-primitive data types can be mutated, if needed.

TEST CASES:
whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}) ➞ ["Barry", "John"]

["John", "Sarah", "Adam", "Barry"] ->
["Adam", "Barry", "John", "Sarah"]
["Barry", "John"]


whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
}) ➞ ["Alex", "Charlie", "Kris", "Zara"]

["Alex", "Charlie", "Kris", "Zara"]
["Alex", "Charlie", "Kris", "Zara"]


whoPassed({
  "Zara" : ["10/10"],
	"zara" : ["10/10", "30/30"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
}) ➞ ["Alex", "Charlie", "Kris", "Zara", "zara"]

whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
}) ➞ []

whoPassed({}) ➞ []

REQUIREMENTS:
	- Initialize result array to record students that passed
	- Retrieve the keys of the object argument
		- Sort the keys by alphabetical order.
	- Iterate through the keys
		- For each key, iterate through its value (array)
	- Determine if each element in array is a 100%
		- First number === Second number
	- If every element in array isn't 100%
		- Do not include student in result array
	- If every element in array is 100%
		- Include student in result array

DATA STRUCTURE:
	- Objects
	- Arrays -> Abstraction Methods (every)

ALGORITHM:
	LET RESULT = []
	LET STUDENTS = KEYS OF OBJECT ARGUMENT
		SORT STUDENTS BY ALPHABETICAL ORDER

	FOR EACH STUDENT OF STUDENTS
		LET GRADES = KEY'S VALUE (ARRAY)
		
		IF EVERY GRADE IN GRADES IS 100%
			PUSH STUDENT TO RESULT
		ELSE
			CONTINUE TO NEXT STUDENT

	RETURN RESULT


IS_100(ARR)
	REPLACE EVERY ELEMENT WITH ELEMENT SPLIT BY "/" CHARACTER
	CHECK IF EVERY SUBARRAY'S ELEMENTS ARE THE SAME AS THE FIRST ELEMENT IN ARRAY
	IF SO
		RETURN TRUE
	ELSE
		RETURN FALSE
*/

function whoPassed(data) {
	let result = [];
	let students = Object.keys(data).sort();

	for (let student of students) {
		let grades = data[student];
		if (everyIs100(grades)) result.push(student);
	}
	
	return result;
}

function everyIs100(grades) {
	grades = grades.map(grade => grade.split("/"));
	return grades.every(grade => grade.every(num => num === grade[0]));
}

p = console.log;

p(whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
})) // ➞ ["Barry", "John"]



p(whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
})) // ➞ ["Alex", "Charlie", "Kris", "Zara"]



p(whoPassed({
  "Zara" : ["10/10"],
	"zara" : ["10/10", "30/30"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
})) // ➞ ["Alex", "Charlie", "Kris", "Zara", "zara"]

p(whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
})) // ➞ []

p(whoPassed({})) // ➞ []