// LS216 Practice Problems
// Vending Machine

/*
https://edabit.com/challenge/PYXbvQh9W3c9i72xx

PROBLEM:
Your task is to create a function that simulates a vending machine.

Input: Array, Number, Number
Output: Object

Rules:
	- Assume the first argument of the function will always be the "products"
		constant shown below.
	- Assume the second argument (money) of the function will always be a 
		Integer
		- If money is not enough to buy a certain product you should return the 
			string: "Not enough money for this product".
	-	Assume the third argument (productNumber) of the function will always be an
		Integer.
		- If productNumber is invalid (out of range) you should return the string: 
			"Enter a valid product number".
		- productNumber must be in range of [1, 9]
	- The return value is an object with 2 properties:
		- product: the product name that the user selected.
		- change: an array of coins 
			- The coins used for the change are the following: 
				[500, 200, 100, 50, 20, 10]
			- Array can be empty.
			- Duplicate coins can be used.
			- Must be sorted in descending order.
			- Change will always in be in 10s.
			- Change array should provide the least number of coins as possible.
	- The "products" can not be mutated.


TEST CASES:
vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }
[500, 200, 100, 50, 20, 10]
[50, 20, 10]
80
30
10

vendingMachine(products, 120, 7) ➞ { product: "Crackers", change: [] }


vendingMachine(products, 900, 6) ➞ { product: "Cola", change: [200, 200] }

vendingMachine(products, 500, 0) ➞ "Enter a valid product number"
vendingMachine(products, 90, 1) ➞ "Not enough money for this product"

REQUIREMENTS:
	- Determine if productNumber is valid (in range [1, 9])
	- Determine if provided amount of money is greater than product price
	- Calculate change to return
		- Loop through coin array searching for largest value smaller than current
			change amount
		- Push that value to change array, subtract value from change amount, 
			and repeat
	- Return product name and change array as result

ALGORITHM:
	LET VALID_NUMBERS = "products" ARRAY MAPPED TO EACH ELEMENT'S "number" property value
	IF ARG3 NOT IN VALID_NUMBERS
		RETURN "invalid number"
	IF products[ARG3 - 1][price] > ARG2
		RETURN "not enough money"

	LET COIN_ARRAY = [500, 200, 100, 50, 20, 10]
	LET CHANGE_ARRAY = []
	LET CHANGE = PRODUCT PRICE - ARG2

	WHILE CHANGE > 0
		FOR EACH VALUE IN COIN_ARRAY
			WHILE (CHANGE / VALUE >= 1)
				PUSH VALUE CHANGE_ARRAY 
				SUBTRACT VALUE FROM CHANGE
	
	RETURN { product: productName, change: CHANGE_ARRAY }
*/

const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Cola' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];

function vendingMachine(products, money, productNumber) {
	if (/^[^1-9]$/.test(String(productNumber))) {
		return "Enter a valid product number";
	}

	if (products[productNumber - 1]["price"] > money) {
		return "Not enough money for this product";
	}

	let coinArray = [500, 200, 100, 50, 20, 10];
	let changeArray = [];
	let change = money - products[productNumber - 1]["price"];

	for (let value of coinArray) {
		if (change / value >= 1) {
			let times = Math.floor(change / value);
			let coins = new Array(times).fill(value);

			changeArray = changeArray.concat(coins);
			change = (change % value);
		}
	}

	return {
		product: products[productNumber - 1]["name"],
		change: changeArray,
	};
}

p = console.log;

p(vendingMachine(products, 200, 7)) 
// ➞ { product: "Crackers", change: [ 50, 20, 10 ] }

p(vendingMachine(products, 120, 7))
// ➞ { product: "Crackers", change: [] }

p(vendingMachine(products, 900, 6)) 
// ➞ { product: "Cola", change: [200, 200] }

p(vendingMachine(products, 500, 0) )
// ➞ "Enter a valid product number"

p(vendingMachine(products, 90, 1)) 
// ➞ "Not enough money for this product"