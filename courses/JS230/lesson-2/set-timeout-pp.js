// JS230 DOM and Asynchronous Programming with JavaScript
// Lesson 2 | Practice Problems - Asynchronous Execution with setTimeout


// Q1
function delayLog() {
	for (let i = 1; i <= 10; i++) {
		setTimeout(_ => console.log(i), i * 1000);
	}
}

delayLog();


// Q2
setTimeout(() => {      // 1
  console.log('Once');  // 5
}, 1000);

setTimeout(() => {			// 2
  console.log('upon');	// 7
}, 3000);

setTimeout(() => {			// 3
  console.log('a');  		// 6
}, 2000);

setTimeout(() => {			// 4
  console.log('time');	// 8
}, 4000);


// Q3

setTimeout(() => {			// 1
  setTimeout(() => {		// 6
    q();								// 12
  }, 15);

  d();									// 7

  setTimeout(() => {		// 8
    n();								// 10
  }, 5);

  z();									// 9
}, 10);								

setTimeout(() => {		// 2
  s();								// 11
}, 20);

setTimeout(() => {		// 3
  f();								// 5
});

g();									// 4

// g, f, d, z, n, s, q


// Q3
function afterNSeconds(callback, n) {
	setTimeout(callback, n * 1000);
}