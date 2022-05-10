/*
The first snippet of code is a case of implicit coercion, where adding a number
to a string value will coerce the number into a string value. The two string 
values are then combined, resulting in "51". 

In the second snippet of code, y++ is used and the variable y containing the 
string value "5" is incremented to 6 (note that it was turned into a number).
Apparently, the use of y++ coerces the string variable into a number, which it
then increments one to.  

*/

let x = "5";
x = x + 1; // value of "51"

let y = "5";
y++        // value of 6


