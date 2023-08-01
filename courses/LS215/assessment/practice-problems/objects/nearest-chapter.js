// LS216 Practice Problems
// Nearest Chapter

/*
https://edabit.com/challenge/E5kxeJA782rNX2bch

PROBLEM:
Create a function that returns which chapter is nearest to the page you're on.

Input: Object, Number
Output: String

Rules:
	- If two chapters are equidistant, return the chapter with the higher page 
		number.
	- All page numbers in the dictionary will be valid integers.
	- Assume the arguments will always be an object and a positive integer (in that order)
		- Assume the page number argument will always be within the range of book's
			pages.
		- Assume the object's properties will always be unique, non-empty strings.
		- Assume the object's values will always be unique positive integer values.
		- Assume the object will always contain at least one property (chapter).
	- The object argument can be mutated, if needed.
	
TEST CASES:

nearestChapter({
  "Chapter 1" : 1, (9)
  "Chapter 2" : 15, (5)
  "Chapter 3" : 37 (27)
}, 10) ➞ "Chapter 2"

nearestChapter({
  "New Beginnings" : 1, (199)
  "Strange Developments" : 62, (138)
  "The End?" : 194, (6)
  "The True Ending" : 460 (260)
}, 200) ➞ "The End?"

nearestChapter({
  "Chapter 1a" : 1, (2)
  "Chapter 1b" : 5 (2)
}, 3) ➞ "Chapter 1b"

nearestChapter({
  "Chapter 1a" : 1, (2)
}, 3) ➞ "Chapter 1a"

REQUIREMENTS:
	- Sort chapters by their page number (increasing order)
	- For each chapter, 
		- Determine the page differences for the chapters and the current page
		- Keep record of the shortest page difference and the associated chapter title
			- A chapter with the same page difference as the shortest page difference 
				should be assigned as the new chapter with the shortest page difference.
	- Return chapter title with shortest page difference

DATA STRUCTURE:
	- Objects
	- Array -> sort 

ALGORITHM:
	LET CHAPTER_TITLES = KEY VALUES OF OBJECT ARGUMENT
	SORT CHAPTER_TITLES BY THEIR PAGE COUNT IN OBJECT ARGUMENT (INCREASING ORDER)
	
	LET NEAREST_CHAPTER = FIRST VALUE IN CHAPTER_TITLES
	LET SHORTEST_PAGE_DIFFERENCE = PAGE DIFFERENCE BETWEEN FIRST CHAPTER AND PAGE ARG

	FOR EACH CHAPTER_TITLE IN CHAPTER_TITLES (STARTING FROM SECOND VALUE)
		LET CHAPTER_PAGE = OBJECT_ARGUEMENT[CHAPTER_TITLE]
		LET PAGE_DIFFERENCE = PAGE DIFFERENCE BETWEEN CHAPTER_PAGE AND PAGE ARG

		IF PAGE_DIFFERENCE IS <= SHORTEST_PAGE_DIFFERENCE
			NEAREST_CHAPTER = CURRENT CHAPTER_TITLE
			SHORTEST_PAGE_DIFFERENCE = PAGE_DIFFERENCE

	RETURN NEAREST_CHAPTER

*/

function nearestChapter(chapters, currentPage) {
	let chapterTitles = Object.keys(chapters);
	chapterTitles.sort((chapterA, chapterB) => {
		return chapters[chapterA] - chapters[chapterB];
	});

	let nearestChapter = chapterTitles[0];
	let shortestPageDifference = Math.abs(chapters[nearestChapter] - currentPage);

	for (let i = 1; i < chapterTitles.length; i++) {
		let chapterTitle = chapterTitles[i];
		let chapterPage = chapters[chapterTitle];
		let pageDifference = Math.abs(chapterPage - currentPage);

		if (pageDifference <= shortestPageDifference) {
			nearestChapter = chapterTitle;
			shortestPageDifference = pageDifference;
		}
	}

	return nearestChapter;
}

p = console.log;

p(nearestChapter({
	"Chapter 2" : 15,
  "Chapter 1" : 1,
  "Chapter 3" : 37
}, 10))

p(nearestChapter({
  "New Beginnings" : 1,
  "The End?" : 194,
  "Strange Developments" : 62,
  "The True Ending" : 460
}, 200))

p(nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3))

p(nearestChapter({
  "Chapter 1a" : 1,
}, 3))
