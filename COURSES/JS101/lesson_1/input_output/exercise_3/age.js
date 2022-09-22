let rlSync = require('readline-sync');
let userAge = rlSync.question("How old are you? ");     // prompts user for age

console.log(`You are ${userAge} years old.`);       // states user's age

// states user's age every decade for the next 40 years

for (let i = 10; i < 50; i += 10) {
    console.log(`In ${i} years, you will be ${Number(userAge) + i} years old.`);
}

