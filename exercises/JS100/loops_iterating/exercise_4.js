/*
The following for loop will not produce an error. The three components for a 
for loop are optional. Though, it is not an issue for our case as we increment
i on line 2, within our console.log statement. 
*/

for (let i = 0; i < 5;) {
  console.log(i += 1);
}