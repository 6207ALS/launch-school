// JS210 Exercises | Interpretive Problem Solving
// Exercise 1 - 1000 Lights

/*

PROBLEM:
Given n, the number of light switches and the number of passes, return an
array of the switches that are still on.

Input: n, the number of switches
Output: Array, switches that are ON

Rules
  - n represents the number of light switches AND number of passes
  - light switches are numbered from 1 - n
  - Every pass starts from the first switch to the last
  - Every light is initially off;
  - For each pass, every nth switch is toggled
    - i.e., 1st pass, every switch is toggled
    - 2nd pass, every other switch is toggled
    - 3rd pass, every 3rd switch is toggled

Implicit
  - Argument of 0 should return an empty array
  - Argument will always be number and provided
  
TEST CASES:
lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

0 0 0 0 0
1 1 1 1 1
1 0 1 0 1
1 0 0 0 1
1 0 0 1 1
1 0 0 1 0

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

REQUIREMENT:
  - Initialize data structure, where each element has a state of on or off
  - Each pass, light switches that are multiples of n are toggled
    - determine the multiples of n
  - Represent each switch as either on or off (0/1, true/false)
  - At end of passes, determine all switches that are on (1, true)

DATA STRUCTURE
  OPTIONS: Array / Objects
  CHOICE: Object

lightsOn(5);        // [1, 4]
{
  1: true,
  2: false,
  3: false,
  4: true,
  5: false,
}

[1, 4]

1: 1 SWITCH TOGGLED
2: 2nd SWITCH TOGGLED
3: 3rd SWITCH TOGGLED
4: 4th SWITCH TOGGLED
5: 5th SWITCH TOGGLED


ALGORITHM:
  INITIALIZE OBJECT WITH KEY AS SWITCH'S NUMBER AND VALUE AS FALSE
  KEY: 1 - N
  VALUES: ALL BE FALSE

  FOR N TIMES (STARTING FROM 1)
    FOR EVERY NTH SWITCH
      TOGGLE SWITCH TO OPPOSITE STATE
  
  LET ON_SWITCHES = []

  FOR SWITCHES 1 - N
    IF SWITCH IS ON (1, true)
      PUSH SWITCH'S KEY VALUE TO ON_SWITCHES

  RETURN ON_SWITCHES
*/

function lightsOn(n) {
  let switches = {};
  let onSwitches = [];

  for (let i = 1; i <= n; i++) {
    switches[i] = false;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j += i) {
      switches[j] = !switches[j];
    }
  }

  for (let i = 1; i <= n; i++) {
    if (switches[i] === true) onSwitches.push(i);
  }

  return onSwitches;
}

console.log(lightsOn(5));
console.log(lightsOn(100));