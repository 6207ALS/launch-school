/*
The dms function takes a floating point number representing an angle between 0 
and 360 degrees and returns a string representing that angle in degrees, 
minutes, and seconds. A degree symbol (˚) is used to represent degrees, a single
quote (') to represent minutes, and a double quote (") to represent seconds. 
There are 60 minutes in a degree, and 60 seconds in a minute.

The function determines the degree by returning the largest integer less than or
equal to the given float (Math.floor). The minutes (rounded to the nearest 
minute) are determined by multiplying the decimal portion of the float by 60. 
The seconds (rounded to the nearest second) are determined by multiplying the 
decimal portion of the number of minutes by 60.
*/

function dms (float) {
  let degree = Math.floor(float);
  let minutes = Math.floor((float - degree) * 60);
  let seconds = Math.floor(((float - degree) * 60 - minutes) * 60);

  let formattedMinutes = String(minutes).padStart(2, '0');
  let formattedSeconds = String(seconds).padStart(2, '0');
  let string = `${degree}˚${formattedMinutes}'${formattedSeconds}"`;
  return string
}

// test cases
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"