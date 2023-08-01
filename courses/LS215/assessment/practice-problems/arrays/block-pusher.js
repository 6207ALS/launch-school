// LS216 Practice Problems
// Block Pusher

/*
https://edabit.com/challenge/sQ6KnsgJjiniZ32yd

PROBLEM:
Create a function which returns the state of a board after n moves.

Input: Array, Number
Output: Array

RULES:
	- There are different types of blocks on the board, as strings.
		">": is a pusher which moves right every turn, and pushes a block to the 
				 right if it occupies the same space as it.
		'#': is a block which can be pushed by the pusher. If a block is pushed 
				 onto another block, then the other block also joins the push chain!
		'-': is an empty space, which a block can be pushed into.

	- Note that the pusher can push any number of blocks at a time, but is always 
		stopped if the push chain hits the end of the list.
	- There may be more than one pusher at a time on the board.
	- Pushers are solid blocks, so a push chain of pushers should also stop when 
		hitting the end of the list.
	- Board could contain only ">"s / only "#"s / only "-"
	- Board could not have any ">"s / "#"s / "-"s
	- If push chain is at end of board, pusher no longer moves to the right
		during the turn.
	- Board could potentially be at "end" state from the beginning.
		- No matter how many turns, board should be returned as is.

	- Arguments will always be an Array and a Number (in that order)
		- Number argument will always be integer greater or equal to 0.
		- Array will only contain ">", "#", and "-" as elements (exactly as is).
		- Array will always contain at least one element.
			- Return array as is.
		- Array will never be sparse.
		- Array could contain duplicate elements.
		- Array can be mutated, if needed.

TEST CASES:
blockPushing(['-', '>', '#', '-', '#', '-', '-', '-'], 1) 
// ➞ ['-', '-', '>', '#', '#', '-', '-', '-']

['-', '>', '#', '-', '#', '-', '-', '-']
['-', '-', '>', "#", '#', '-', '-', '-']

blockPushing(['>', '#', '-', '#', '-', '-', '#'], 10)
// ➞ ['-', '-', '-', '>', '#', '#', '#']

['>', '#', '-', '#', '-', '-', '#']

["-", ">", "#", '#', '-', '-', '#'] ~1

["-", "-", ">", "#", "#", '-', '#'] ~2

["-", "-", "-", ">", "#", "#", '#'] ~3
"#", "#", "#"

["-", "-", "-", ">"]


blockPushing(['>', '-', '>', '#', '-', '-', '#', '-'], 2) 
// ➞ ['-', '-', '>', '-', '>', '#', '#', '-']

blockPushing(['>', '>', '>', '-'], 3) 
// ➞ ['-', '>', '>', '>']

blockPushing(['>'], 3) 
// ➞ [">"]

blockPushing(['#', '#', '#', '#'], 3)
// ➞ ['#', '#', '#', '#']

blockPushing(['>', "#", "#"], 3) 
// ➞ [">", "#", "#"]

REQUIREMENTS:
	- Iterate N number of times
		- Initialize new board to reflect state of board at each turn. []
		- Iterate through each element of board
			- If element is not ">", push character to new board
			- If element is ">",
				- Push "-" to new board.
				- Push ">" to new board
				- Determine the block chain in front of ">" in original board.
					- If block chain contains ">", 
				- Push block chain to new board.
				- Push remainder of board to new board
					- Slice board from (current index + length of block chain + 1) to end


*/
