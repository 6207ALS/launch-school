// JS210 Exercises | Medium 1
// Exercise 8 - Fibonacci Numbers Procedural

function fibonacci(n) {
	let fib1 = 1;
	let fib2 = 1;
	let currentN = 2;

	while (currentN !== n) {
		let nextFib = fib1 + fib2;
		fib1 = fib2;
		fib2 = nextFib;
		currentN++;
	}
	
	return fib2;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050