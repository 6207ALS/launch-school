/*
In continuation of exercise "Easy 5: After Midnight (Part 1)"...
The functions afterMidnight and beforeMidnight each take a time of day in 24 
hour format, and return the number of minutes before and after midnight, 
respectively. Both functions return a value in the range 0..1439.

The functions determine the number of hours and minutes by splitting the time
from the colon character. To determine minutes elapsed after midnight, the
function returns the time in minutes — as midnight in 24 hour format is
00:00. To determine minutes before midnight, the function subtracts the time in
minutes from the number of minutes in a day — as midnight in 24 hour format can
also be 24:00. If the time is 00:00, the function returns 0 instead of 1440 
(1440 - 0 = 1440).  
*/

const MINS_PER_DAY = 1440;

function afterMidnight(time) {
  let hours = Number(time.split(':')[0]);
  let minutes = Number(time.split(':')[1]);
  let totalMins = ((hours * 60) + minutes) % MINS_PER_DAY;
  
  return totalMins;
}

function beforeMidnight(time) {
  let hours = Number(time.split(':')[0]);
  let minutes = Number(time.split(':')[1]);
  let totalMins = (hours * 60) + minutes;

  if (!totalMins) return 0;
  return MINS_PER_DAY - totalMins;
}

// test cases
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);