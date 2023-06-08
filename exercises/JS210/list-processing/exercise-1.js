// JS210: Small Problems - List Processing
// Exercise 1

function sum(number) {
  return String(number)
    .split("")                   
    .reduce((acc, digit) => acc + Number(digit), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45