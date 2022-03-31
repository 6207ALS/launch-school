/* 
The getGrade function determines the mean (average) of the three scores passed 
to it, and returns the grade letter associated to the number.
*/

function getGrade (grade1, grade2, grade3) {
  let avg = (grade1 + grade2 + grade3) / 3;
  if (avg >= 90 && avg <= 100) {
    return 'A';
  } else if (avg >= 80 && avg < 90) {
    return 'B';
  } else if (avg >= 70 && avg < 80) {
    return 'C';
  } else if (avg >= 60 && avg < 70) {
    return 'D';
  } else if (avg >= 0 && avg < 60) {
    return 'F';
  } 
 }

// test cases
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"