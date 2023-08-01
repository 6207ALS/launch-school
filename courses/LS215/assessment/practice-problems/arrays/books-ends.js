// LS216 Practice Problems
// Books and Book Ends

function countUniqueBooks(books, bookEnd) {
	let regex = new RegExp(`\\${bookEnd}\\w*?\\${bookEnd}`, "g");
	let bookEnds = books.match(regex).join("").replaceAll(`${bookEnd}`, "");
	bookEnds = bookEnds.split("").filter((book, index) => bookEnds.indexOf(book) === index);

	return bookEnds.length;
}

p = console.log;

p(countUniqueBooks("AZYWABBCATTTA", "A"))
p(countUniqueBooks("$AA$BBCATT$C$$B$", "$")) // ➞ 3
p(countUniqueBooks("ZZABCDEF", "Z")) // ➞ 0