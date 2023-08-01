// LS216 Practice Problems
// Almost Palindrome Sieve

/*
https://edabit.com/challenge/xPnZKhYcn5TwK3HFT

PROBLEM:
Write a function that takes in an array of integers and returns the integers 
that are either palindromes or almost-palindromes. An almost-palindrome is any 
integer that can be rearranged to form a palindrome.


ALGORITHM:
	LET RESULT = []

	FOR EACH INTEGER OF INTEGERS
		IF INTEGER IS_PALINDROME OR IS_ALMOST_PALINDROME
			PUSH INTEGER TO RESULT

IS_PALINDROME
	RETURN INTEGER IS EQUAL TO INTEGER'S DIGITS REVERSED

IS_ALMOST_PALINDROME
	ITERATE THROUGH EVERY PERMUTATION OF THE INTEGER'S DIGITS
		IF PERMUTATION IS EQUAL TO INTEGER'S DIGITS REVERSED
			RETURN TRUE

*/

function palindromeSieve(nums) {
	let result = [];

	for (let num of nums) {
		if (isPalindrome(num) || isAlmostPalindrome(num)) result.push(num);
	}

	return result;
}


function isPalindrome(num) {
	return String(num) === String(num).split("").reverse().join("");
}

function isAlmostPalindrome(num) {
  let numPermutations = permutations(num);
	return numPermutations.some(permutation => isPalindrome(permutation));
}

function permutations(num) {
	num = String(num);
	if (num.length === 0) return "";
  if (num.length === 1) return num;
	let result = [];

	for (let i = 0; i < num.length; i++) {
    const currentDigit = num[i];
    const remainingDigits = num.slice(0, i) + num.slice(i + 1);
		for (let j = 0; j < remainingDigits.length; j++) {
      result.push(currentDigit + permutations(remainingDigits)[j]);
    }
  }

  return result;
}

p = console.log;

p(palindromeSieve([443, 12, 639, 121, 3232])) // ➞ [443, 121, 3232]
// Since 443 => 434; 121 is a palindrome; 3232 => 2332 or 3223

p(palindromeSieve([5, 55, 6655, 8787])) // ➞ [5, 55, 6655, 8787]
// Single-digit numbers are automatically palindromes.

p(palindromeSieve([897, 89, 23, 54, 6197, 53342])) // ➞ []