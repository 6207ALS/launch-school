// JS210 Exercises | Easy 2
// Exercise 2 - Bannerizer

/*
PROBLEM:
Write a function that will take a short line of text, and write it to the 
console log within a box.

Input: String
Output: String

RULES:
  - Output will always fit in the browser window.
  - Logged message should be within a box
  - Function could either log line-by-line or the entire string
  - Empty string should still log the box
  - Assume argument will always be a string.
  - Space character (" ") will be the only whitespace allowed.

TEST CASE:
logInBox('To boldly go where no one has gone before.');

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

REQUIREMENTS:
  - Corners of box are "+" characters
  - Top and bottom sides of box are "-" characters
  - Left and right sides of box are "|" characters
  - Above and below the message are empty rows
  - Height of output will always 5 layers
  - Length of output is based on length of string argument. (MIN LENGTH OF 2 SPACES)
  - Log box even if empty string (HEIGHT OF 5 LINES, LENGTH OF 4 CHARACTERS)

DATA STRUCTURE:
  VARIABLES, STRINGS

ALGORITHM:
  FUNCTION logInBox(str)
    LOG_TB_LAYER
    LOG_SIDE_LAYER
    LOG_MESSAGE
    LOG_SIDE_LAYER
    LOG_TB_LAYER

  FUNCTION LOG_TB_LAYER (LENGTH OF STR)
    "+-" + "-"(REPEATED (LENGTH OF STR) NUMBER OF TIMES) + "-+"

  FUNCTION LOG_SIDE_LAYER (LENGTH OF STR)
    "| " + " "(REPEATED (LENGTH OF STR) NUMBER OF TIMES) + " |"

  FUNCTION LOG_MESSAGE (STR)
    "| " + STR + " |"
*/

function logInBox(str) {
  logTBLayer(str.length);
  logSideLayer(str.length);
  logMessage(str);
  logSideLayer(str.length);
  logTBLayer(str.length);
}

function logTBLayer(length) {
  console.log(`+-${"-".repeat(length)}-+`);
}

function logSideLayer(length) {
  console.log(`| ${" ".repeat(length)} |`);
}

function logMessage(str) {
  console.log(`| ${str} |`);
}

logInBox("To boldly go where no one has gone before.");
logInBox("");