/*
The timeOfDay function takes a time using this minute-based format and returns 
the time of day in 24 hour format (hh:mm). 

The function first determines if the minute argument is within a 24 hour 
timeframe (1440 minutes). If not, it will repeatedly add/subtract 1440 from the 
minutes so that 0 <= minutes <= 1440. It can then determine the time from the 
minutes. Number of hours is calculated by extracting the integer when 
dividing the minutes by 60. Number of minutes can be determined by finding the 
remainder when dividing minutes by 60. 
*/

function timeOfDay (num) {
  const MINS_PER_DAY = 1440;
  while (num < 0) num += MINS_PER_DAY;
  if (num > 1440) num %= MINS_PER_DAY;

  let hours = parseInt(num / 60, 10);
  let minutes = num % 60;

  return `${String(hours).padStart(2,0)}:${String(minutes).padStart(2,0)}`;
}

// test cases
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");