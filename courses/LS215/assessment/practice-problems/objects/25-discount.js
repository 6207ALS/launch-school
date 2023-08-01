// LS216 Practice Problems
// 25% discount on most expensive item

/*
PROBLEM:
Create a function that takes an object and returns the total price after 
discount.

Input: Array (of Objects)
Output: Number

Rules:
	- Every customer gets a 25% discount on the most expensive item in the 
		shopping cart.
	- The discount will be calculated on just one item, even if the customer buys
		more than one of the most expensive item.
	- The total returned price is calculated upon two decimals.

	- Assume argument will always be a single array of objects.
		- Array will never be sparse.
		- If array is empty, return 0.00 .
		- Assume objects of array will always have three properties:
			- "name"
				- Value will always be a non-empty string.
				- Unique product names are case-sensitive.
				- Unique product names are whitespace-sensitive.
			- "quantity"
				- Value will always be integer greater than 0.
				- No max value (Beside MAX_SAFE_INTEGER)
			- "price"
				- Value will always either be an integer or decimal (2 decimals)
					- Value will always be greater or equal to 0. 
			- No two items will have the same price.
	- Non-primitive data types can be mutated, if needed.

TEST CASES:

twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]) // ➞ 58124.25

[1350, 1225, 800, 72999] -> 72999
0 + (1 * 1350) + (1 * 1225) + (1 * 800) + (((1 - 1) * 72999) + (0.75 * 72999))


twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
]) // ➞ 86.96

twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 5 },
  { name: "tennis socks", quantity: 1, price: 6 },
  { name: "sweat shirt", quantity: 2, price: 10 }
]) // ➞ 28.50

[5, 6, 10] -> 10
0 + (1 * 5) + (1 * 6) + (((2 - 1) * 10) + (0.75 * 10))


twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 5 },
  { name: "tennis socks", quantity: 1, price: 9 },
  { name: "sweat shirt", quantity: 2, price: 10 }
]) // ➞ 31.50

twentyFiveOnOne([]) // ➞ 0.00

REQUIREMENTS:
	- Retrieve prices of all items in cart
		- Determine the highest cost.

	- Iterate through each item in cart
		- If item's price is === the highest cost
			- item's total = ((quantity - 1) * price) + (0.75 * price)
		- If item's price is NOT the highest cost
			- item's total = quantity * price.

	- Return sum of all items' totals (fixed to 2 decimals).

DATA STRUCTURE:
	- Array -> Abstraction Methods (Map, Reduce)
	- Objects

ALGORITHM:
	LET PRICES = VALUES OF "price" PROPERTY OF ALL OBJECTS IN ARRAY ARG
	LET HIGHEST_PRICE = HIGHEST VALUE IN PRICES
	
	LET TOTAL = 0

	FOR EACH ITEM IN ARRAY ARGUMENT
		IF ITEM'S PRICE === HIGHEST_PRICE
			TOTAL += ((ITEM[QUANTITY] - 1) * PRICE) + (0.75 * PRICE)
		ELSE
			TOTAL += (ITEM[QUANTITY]) * PRICE

	RETURN TOTAL
*/

function twentyFiveOnOne(items) {
	let prices = items.map(item => item["price"]);
	let highestPrice = Math.max(...prices);
	let total = 0;

	for (let item of items) {
		if (item["price"] === highestPrice) {
			total += ((item["quantity"] - 1) * item["price"]) + (0.75 * item["price"]);
		} else {
			total += (item["quantity"] * item["price"]);
		}
	}

	return total.toFixed(2);
}

p = console.log;

p(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]))// ➞ 58124.25


p(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
])) // ➞ 86.96

p(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 5 },
  { name: "tennis socks", quantity: 1, price: 6 },
  { name: "sweat shirt", quantity: 2, price: 10 }
])) // ➞ 28.50


p(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 5 },
  { name: "tennis socks", quantity: 1, price: 9 },
  { name: "sweat shirt", quantity: 2, price: 10 }
])) // ➞ 31.50

p(twentyFiveOnOne([])) // ➞ 0.00