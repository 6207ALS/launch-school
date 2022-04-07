/*
The letterPercentages function takes a string and returns an object containing 
the following three properties: the percentage of characters in the string that 
are lowercase letters, the percentage of characters that are uppercase letters,
and the percentage of characters that are neither.

The function first initalizes the object, each property being assigned the 
number 0. It then iterates over each character of the string, tallying its
letter case to the object. Finally, it goes over the object's values, 
converting them to percentages. 
*/

function letterPercentages (string) {
  let ratio = {
    lowerCount: 0,
    upperCount: 0,
    neitherCount: 0,
  }

  for (char of string) {
    if (char !== char.toUpperCase()) {
      ratio["lowerCount"]++;
    } else if (char !== char.toLowerCase()) {
      ratio["upperCount"]++;
    } else {
      ratio["neitherCount"]++;
    }
  }

  for (key in ratio) {
    ratio[key] = ((ratio[key] / string.length) * 100).toFixed(2);
  }

  return ratio;
}

// test cases
console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }