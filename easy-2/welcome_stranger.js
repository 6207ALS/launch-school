/*
The greetings function returns a greeting (string) that mentions a person's 
name and occupational details. It takes 2 arguments: an array and an object, 
both containing personal information about the individual. 
*/

function greetings (arr, obj) {
  let fullName = arr.join(' ');
  return `Hello, ${fullName}! Nice to have a ${obj.title} ${obj.occupation} around.`;
}

// test case
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
