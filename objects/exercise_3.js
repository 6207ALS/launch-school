/*
The following code constructs an object that behaves like an array within the
for loop. The majority of the keys are named with numbers to represent the 
indexes for an array. The object also has a length property to determine the
number of iterations for the for loop. 
*/

let myArray = {
  0 : "a",
  1 : "b",
  2 : "c",
  3 : 'd',
  length : 4
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

/* 
One question I have regarding this exercise is the absence of quotation marks
within the for loop. Within the loop's body, the current i value (having a 
data type of "Number"), is passed into myArray[i]. I thought the general rule 
for bracket notation of objects was to include quotations. Is there an 
exception for this case? It appears that the program will recognize myArray[0]
just fine, whereas myArray[length] will not work. 
*/