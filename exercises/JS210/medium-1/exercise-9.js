// JS210 Exercises | Medium 1
// Exercise 9 - Fibonacci Numbers Memoization

let fibonacci = (() => {
	let fibSequence = [1, 1];
	return function(n) {
		while (fibSequence.length < n) {
			let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
			fibSequence.push(nextFib);
		}
		return fibSequence[n - 1];
	}
})();

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050