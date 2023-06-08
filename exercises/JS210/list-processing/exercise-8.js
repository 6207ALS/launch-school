// JS210: Small Problems - List Processing
// Exercise 8

function buyFruit(list) {
  return list.reduce((result, item) => {
    for (let i = 0; i < item[1]; i++) {
      result.push(item[0]);
    }

    return result;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]