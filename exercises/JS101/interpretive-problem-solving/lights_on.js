/*
The lightsOn function takes argument n, the total number of switches, and 
returns an array of the lights that are on after n passes. For each pass,
every multiples of n lightbulbs are toggled on/off.

The function first initializes an object with n keys, each starting out with 
false, to represent off. Then, the function runs a nested for-loop. The outer 
loop represents the number of passes made. The inner loop takes the current 
number of passes, and increments in multiples of that number. Every n multiple 
of keys in the "switches" object are toggled on/off. At the end, the keys 
(representing switches) with a boolean value of true are returned in an array.   
*/

function lightsOn (switches) {
  let num = switches;
  switches = {};

  for (let i = 1; i <= num; i++) {
    switches[i] = false;
  }

  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j += i) {
      switches[j] = !switches[j];
    }
  }

  let onSwitches = [];
  for (index in switches) {
    if (switches[index] === true) onSwitches.push(index);  
  }

  return onSwitches;
}

// test cases
console.log(lightsOn(5)); 
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]