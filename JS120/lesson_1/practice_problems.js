/*
Answers for JS120 - Lesson 1, Practice Problems: Objects and Factories
*/

// Q1

let book1 = {
  title: "Mythos",
  author: "Stephen Fry",

  getDescription() {
    console.log(`${this.title} was written by ${this.author}`);
  }
}

let book2 = {
  title: "Me Talk Pretty One Day",
  author: "David Sedaris",

  getDescription() {
    console.log(`${this.title} was written by ${this.author}`);
  }
}

let book3 = {
  title: "Aunts aren't Gentlemen",
  author: "PG Wodehouse",

  getDescription() {
    console.log(`${this.title} was written by ${this.author}`);
  }
}

book1.getDescription();
book2.getDescription();
book3.getDescription();

/*
Three objects were initialized and declared with common states and behavior. 
They all have title and author properties, along with a 'get description'
behavior. The getDescription() method was called on all three objects to 
log the book's title and author to the console. 
*/


// Q2

/*
When reviewing the code for Problem #1, I notice the redundancy of assigning
common properties for every book object. Each book has 'title', 'author', and
'getDescription()' properties, yet it was required to declare them for every 
object. The difference, however, is the value each book has for their 
properties. Every book has a unique title and author. 
*/


// Q3

function createBook(title, author) {
  return {
    title,    // same as `title: title`
    author,   // same as `author: author`

    getDescription() {
      console.log(`${this.title} was written by ${this.author}.`);
    }
  }
}

let book4 = createBook('Mythos', 'Stephen Fry');
let book5 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book6 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

book4.getDescription();  // "Mythos was written by Stephen Fry."
book5.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
book6.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

/*
A factory function was defined to return a book object. The function takes 
two arguments (book title, and book author), which are used to set the property 
values of the returned book object. 

As shown in the function, a shorthand syntax can be used when an object's 
property name is the same as the function's parameter names: you can omit the 
":" and simply pass the name. For example, "title" becomes a property name and 
is assigned the value that is passed for the function's "title" argument. 
*/


// Q4

function createBook(title, author) {
  return {
    title,
    author,
    read: false,

    getDescription() {
      console.log(`${this.title} was written by ${this.author}.`);
    }
  }
}

let book7 = createBook('Mythos', 'Stephen Fry');
let book8 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book9 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book7.read); // => false
console.log(book8.read); // => false
console.log(book9.read); // => false

/*
The 'read' property was added to the returned object in the factory function. 
It is initialized with the Boolean value of 'false'. 
*/


// Q5

function createBook(title, author, read=false) {
  return {
    title,
    author,
    read,

    getDescription() {
      console.log(`${this.title} was written by ${this.author}.`);
    }
  }
}

let book10 = createBook('Mythos', 'Stephen Fry');
let book11 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book12 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

console.log(book10.read); // => false
console.log(book11.read); // => false
console.log(book12.read); // => true

/*
The factory function was revised to change the 'read' property as a parameter.
It has a default value of the Boolean 'false'. 
*/


// Q6

function createBook(title, author, read=false) {
  return {
    title,
    author,
    read,

    getDescription() {
      console.log(`${this.title} was written by ${this.author}.`);
    },

    readBook() {
      this.read = true;
    }
  }
}

let book13 = createBook('Mythos', 'Stephen Fry');
console.log(book13.read); // => false
book13.readBook();
console.log(book13.read); // => true

/*
The createBook factory function was modified to have a readBook() method, which 
reassigns the value of the object's 'read' property to true. When object 
'book13' is first declared and intialized, its 'read' property is initialized 
with the Boolean value false. On line 166, the readBook() method is called on 
book13, which reassigns the object's read property to 'true'.
*/


// Q7

function createBook(title, author, read=false) {
  return {
    title,
    author,
    read,

    getDescription() {
      let hasRead = this.read? 'have': "haven't";

      console.log(
        `${this.title} was written by ${this.author}. I ${hasRead} read it.`
      );
    },

    readBook() {
      this.read = true;
    }
  }
}

let book14 = createBook('Mythos', 'Stephen Fry');
book14.getDescription(); // Mythos was written by David Fry. I haven't read it.
book14.readBook();
book14.getDescription(); // Mythos was written by David Fry. I have read it.

/*
The factory function createBook() was modified to have its getDescription()
method indicate if the user read the book. The getDescription() method first
declares and initializes a variable 'hasRead' with the value of a ternary 
operator expression. If the object's 'read' property is true, the variable is 
assigned to the string "have". Else, the variable is assigned to the string 
"haven't". The variable's value is then interpolated into the method's returned 
string. 
*/