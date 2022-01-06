/*
The following code will cause an infinite loop because we assign the counter
variable, within the while loop condition, to 1 every iteration. The program
will always recognize this condition as true, as variable assignments will
return the assigned value (in this case, the value of 1). Further, the counter
variable will never be greater than 2 and will never break the while loop. 
*/

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}