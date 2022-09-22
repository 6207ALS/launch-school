/*
The fridayThe13ths function takes a year as an argument and returns the number 
of Friday the 13ths in that year. It is assumed that the year is greater than 
1752, which is when the United Kingdom adopted the modern Gregorian Calendar. 
It is also assumed that the same calendar will remain in use for the foreseeable
future.

The function first initializes an empty array. It then iterates over every month
of the given year and pushes the date of the month's 13th day to the array. The 
array is then filtered to keep the dates where the 13th is a Friday. The length 
of the array is returned. 
*/

function fridayThe13ths (year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month++) {
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.filter(date => date.getDay() === 5).length;
}

// test cases
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2