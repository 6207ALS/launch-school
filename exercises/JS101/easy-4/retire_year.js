/*
The retire_year.js program prompts the user for their current age and desired 
age to retire. It then logs to the console the year they will retire and how 
many years are left until then.  
*/

let rlSync = require("readline-sync");
let currentAge = rlSync.question("What is your age? ");
let retireAge = rlSync.question("At what age would you like to retire? ");

let date = new Date();
let numYears = (Number(retireAge) - Number(currentAge));
let retireYear = date.getFullYear() + numYears;  

console.log(`
It's ${date.getFullYear()}. You will retire in ${retireYear}.
You have only ${numYears} years of work to go!
`);