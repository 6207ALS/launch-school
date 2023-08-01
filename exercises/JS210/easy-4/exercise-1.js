// JS210 Exercises | Easy 4
// Exercise 1 - Cute Angles

/*
PROBLEM:
Write a function that takes a floating point number representing an angle 
between 0 and 360 degrees and returns a string representing that angle in 
degrees, minutes, and seconds.

Input: Number
Output: String

Rules:
	- Argument is in degrees, output should convert argument to degrees, minutes, 
		and seconds.
	- There are 60 minutes in a degree, and 60 seconds in a minute.
		- 1 degree = 60 minutes, 1 minute = 60 seconds
	- You should use a degree symbol (˚) to represent degrees, a single quote (') 
		to represent minutes, and a double quote (") to represent seconds
	- Assume all arguments will be a postive number
		- for integers, assume 0 minutes and 0 seconds
	- Output should be in order of degrees, minutes, and seconds
	- Leading zeros (left of decimal) should be ignored

TEST CASES:
dms(30);           // 30°00'00"
- integer -> degrees

dms(76.73);        // 76°43'48"
- .73 of a degree ->  
- 60 minutes in a degree
- ? minutes in .73 of degree

1. integer -> degrees -> 76 degrees
2. multiply decimal portion of argument by 60 to get minutes -> 43.8 minutes
	 - 1 degree / 60 minutes = .73 degree / x minutes
3. multiply decimal portion of minutes by 60 to get seconds -> 48 seconds
	 - 1 minutes / 60 seconds = .8 minute / x minutes 

dms(254.6);        // 254°35'59"
254 degrees
.6 * 60 = 36


dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

REQUIREMENTS:
	- Integer (number left of decimal) is degree for output
	1. integer -> degrees -> 76 degrees
	2. multiply decimal portion of argument by 60 to get minutes -> 43.8 minutes
		 - 1 degree / 60 minutes = .73 degree / x minutes
	3. multiply decimal portion of minutes by 60 to get seconds -> 48 seconds
		 - 1 minutes / 60 seconds = .8 minute / x minutes
	- For every value calculated (in steps 1 - 3) integer value is the unit measure
	- Place integer values in formatted string

DATA STRUCTURE:
	- Numbers

ALGORITHM:
	LET DEGREES = EXTRACT INTEGER PORTION OF ARGUMENT
									ROUND DOWN ARGUMENT TO NEAREST INTEGER

	LET MINUTES = EXTRACT DECIMAL PORTION OF ARGUMENT
									SUBTRACT INTEGER PORTION FROM ORIGINAL ARGUMENT 
								MULTIPLY DECIMAL VALUE BY 60

	LET SECONDS = EXTRACT DECIMAL PORTION OF MINUTES
									SUBTRACT (MINUTES ROUNDED DOWN TO NEAREST INTEGER) FROM MINUTES
								MULTIPLY DECIMAL VALUE BY 60

	PLACE VALUES IN STRING FORMATTED (ROUND EACH VALUE DOWN TO NEAREST INTEGER)

*/

function dms(degrees) {
	let resultDegrees = Math.floor(degrees);
	let minutes = (degrees - resultDegrees) * 60;
	let seconds = (minutes - (Math.floor(minutes))) * 60;
	
	console.log(`${String(resultDegrees).padStart(2, 0)}°${String(Math.floor(minutes)).padStart(2, 0)}'${String(Math.floor(seconds)).padStart(2, 0)}"`);
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"