/*
The isItemAvailable function returns true or false based on whether or not an 
inventory item is available. As before, the function takes two arguments: an 
inventory item and a list of transactions. The function returns true only if the
sum of the quantity values of the item's transactions is greater than zero. 
Note that there is a movement property in each transaction object. A movement 
value of 'out' will decrease the item's quantity.

The function views at transactions with id numbers that match with the given 
argument. It then views at the transaction's movement ("in" or "out") and 
adds or subtracts the quantity to the total accordingly. After looking at all 
matching transactions, if the total is greater than 0, return true, else false. 
*/

function isItemAvailable (num, transactions) {
  let total = 0;
  for (let transaction of transactions) {
    if (transaction['id'] === num) {
      if (transaction['movement'] === 'in') {
        total += transaction['quantity'];
      } else {
        total -= transaction['quantity'];
      }
    }
  }
  return total > 0;
}

// test cases
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true