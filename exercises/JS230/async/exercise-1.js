// JS230 - Front-end Development with JavaScript | Exercises
// Events and Asynchronous Programming | Randomizer

/*
PROBLEM:
Write a randomizer function that accepts n callbacks and calls each callback at 
some random point in time between now and 2 * n seconds from now.

Input: x Functions
Output: undefined

RULES:
  - While running, randomizer should log the elapsed time every second: 
    1, 2, 3, ..., 2 * n.
  - Expect the output to change with each run due to the random execution times.

  - Order in which the callbacks are executed does not have to be the same as
    the order in which the callbacks are provided in the argument.
  

REQUIREMENTS:
  - Place the arguments into an array
  - For n elements in the array, generate n random numbers in the range of
    1 - (2 * n)
  - Loop n times (1 -> (2 * n))
  - For each loop, set a timeout for n seconds.
    - if n is one of the randomly generated numbers, remove a random callback
      in the array of callbacks and invoke it.
    - else, just log n  

DATA STRUCTURE:
  - ARRAY

ALGORITHM:
  LET CALLBACKS = [ALL ARGUMENTS]
  LET N = LENGTH OF CALLBACKS
  
  LET SECONDS_ELAPSED = 1

  LET LOGGER = INTERVAL EVERY 1 SECOND
    LOG SECONDS_ELAPSED
    SECONDS_ELAPSED++
    IF SECONDS_ELAPSED = N * 2
      END INTERVAL

  FOR EACH CALLBACK OF CALLBACKS
    LET RANDOM_SECOND = RANDOM NUMBER FROM [1, 2 * N]
    SET TIMEOUT FOR RANDOM_SECOND SECONDS
      INVOKE CALLBACK
*/

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let n = callbacks.length;
  
  let secondsElapsed = 1;
  let timeLogger = setInterval(() => {
    console.log(secondsElapsed);
    if (secondsElapsed === n * 2) clearInterval(timeLogger);
    secondsElapsed++;
  }, 1000); 

  for (let callback of callbacks) {
    let randomSecond = randomNum(1, 2 * n);
    setTimeout(callback, randomSecond * 1000);
  }
}

function randomNum(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6