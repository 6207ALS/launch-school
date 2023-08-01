// JS210 Exercises | Medium 2
// Exercise 4 - Unlucky Days

/*
PROBLEM:
Write a function that takes a year as an argument and returns the number of 
'Friday the 13ths' in that year.

Input: Number 
Output: Number

Rules:
	- Assume that the year is greater than 1752 (when the modern Gregorian 
		Calendar was adopted by the United Kingdom).
		- Assume that the same calendar will remain in use for the foreseeable 
			future.
	- Assume that the argument will always be a number.
		- Assume that the number will always be an integer greater than 1752.
	- Leading zeros should be ignored.
	
TEST CASES:
	fridayThe13ths(1986);      // 1
	fridayThe13ths(2015);      // 3
	fridayThe13ths(2017);      // 2

counter = 2

12 months -> 12 13ths -> ? "Friday the 13ths"
Jan, Feb, Mar, .... 
Jan 13th = Friday ?
Feb 13th = Friday ?

REQUIREMENTS:
	- Initialize a counter = 0, keep tally of "Friday the 13ths" for that year
	- Iterate through the 12 months of the provided year
	- For each month, check if month's 13th day is a Friday
		- if 13th day is a Friday, increment a counter
	- Date.prototype.getDay(): The getDay() method of Date instances returns the 
		day of the week for this date according to local time, where 0 represents 
		Sunday.
	- Date.prototype.getDate(): The getDate() method of Date instances returns the 
		day of the month for this date according to local time.
	
DATA STRUCTURE:
	Date Object

ALGORITHM:
	LET COUNTER = 0;

	FOR I IN RANGE (1 TO 12)
		LET DATE = NEW DATE INSTANCE (`[YEAR_ARGUMENT]-[I VALUE]-[13]`)		
		CHECK IF DATE'S DAY IS A FRIDAY (Date.prototype.getDay())
		IF DAY IS FRIDAY
			INCREMENT COUNTER

	RETURN COUNTER
*/

function fridayThe13ths(year) {
	let counter = 0;

	for (let month = 0; month <= 11; month++) {
		let date = new Date(year, month, 13);
		if (date.getDay() === 5) counter++;
	}

	return counter;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2