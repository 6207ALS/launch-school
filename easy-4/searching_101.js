/*
The searching_101.js program prompts the user for 6 numbers. It then logs to the
console if the 6th number is the same as any of the other 5 numbers. 
*/

let rlSync = require('readline-sync');
let arrNums = [];

arrNums.push(Number(rlSync.question('Enter the 1st number: ')));
arrNums.push(Number(rlSync.question('Enter the 2nd number: ')));
arrNums.push(Number(rlSync.question('Enter the 3rd number: ')));
arrNums.push(Number(rlSync.question('Enter the 4th number: ')));
arrNums.push(Number(rlSync.question('Enter the 5th number: ')));

let lastNum = Number(rlSync.question('Enter the last number: '));

if (arrNums.includes(lastNum)) {
    console.log(`The number ${lastNum} appears in ${arrNums}.`);
} else {
    console.log(`The number ${lastNum} does not appear in ${arrNums}.`);
}