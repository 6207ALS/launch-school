let rlSync = require('readline-sync');
let userAge = rlSync.question("How old are you? ");

console.log(`You are ${userAge} years old.`);

for (let i = 10; i < 50; i += 10) {
    console.log(`In ${i} years, you will be ${Number(userAge) + i} years old.`);
}