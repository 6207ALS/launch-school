/*
(JS130) Lesson 2 - Closures and Private Data: Practice Problems
NOTE: outputs may vary due to duplicated code
*/

// Q1
function makeCounterLogger(num) {
  return function(secondNum) {
    if (num < secondNum) {
      for (let i = num; i <= secondNum; i++) {
        console.log(i);
      }
    } else {
      for (let i = num; i >= secondNum; i--) {
        console.log(i);
      } 
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);


// Q2

function makeList() {
  let list = [];

  function printList() {
    if (list.length === 0) {
      return console.log("The list is empty");
    }

    for (let task of list) {
      console.log(task);
    }
  }

  function removeTask(arg) {
    list.forEach((task, index) => {
      if (task === arg) list.splice(index, 1);
    });

    console.log(`${arg} removed!`);
  }

  function addTask(arg) {
    list.push(arg);
    console.log(`${arg} added!`);
  }

  return function(arg) {
    if (arg === undefined) {
      printList();
    } else if (list.includes(arg)) {
      removeTask(arg);
    } else {
      addTask(arg);
    };
  }
}

let list = makeList();
list();
// The list is empty.

list("make breakfast");
// make breakfast added!

list("read book");
// read book added!

list();
// make breakfast
// read book


list("make breakfast");
// make breakfast removed!

list();
// read book


/*
More practice problems
*/


// Q1
function makeList() {
  let list = [];
  return {
    add(arg) {
      if (!list.includes(arg)) {
        list.push(arg);
        console.log(`${arg} added!`);
      }
    },

    list() {
      for (let task of list) {
        console.log(task);
      }
    },

    remove(arg) {
      let index = list.indexOf(arg);

      list.splice(index, 1);
      console.log(`${arg} removed!`);
    },
  }
}

list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn