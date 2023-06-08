// LS215: List Processing and Functional Abstractions
// Lessons 14 - 19 | Practice Problems


// Lesson 14: Total Square Area
// Q1
function totalArea(rectangles) {
  let totalArea = rectangles.reduce((total, rectangle) => {
    total += rectangle[0] * rectangle[1];
    return total;
  }, 0);

  return totalArea;
}

let rectangles1 = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles1));    // 141

// Q2
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  let areas = squares.map(square => square[0] * square[1]);

  return areas.reduce((acc, val) => acc + val);
}

let rectangles2 = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalSquareArea(rectangles2));    // 121


// Lesson 15: Processing Releases
let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

function processReleaseData(newReleases) {
  return newReleases.filter(release => {
    return ("id" in release && "title" in release);
  }).map(release => ({ id: release["id"], title: release["title"] })); 
}

console.log(processReleaseData(newReleases));

// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];


// Lesson 16: Octal
function octalToDecimal(octal) {
  let digits = octal.split("").map(digit => Number(digit));
  
  let powers = digits.map((digit, index) => {
    return digit * Math.pow(8, (octal.length - index - 1 ));
  });

  return powers.reduce((acc, power) => acc + power, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9


// Lesson 17: Anagrams
function anagram(anagram, words) {
  let anagramSorted = anagram.split("").sort().join("");
  
  return words.filter(word => {
    let wordSorted = word.split("").sort().join("");
    return wordSorted === anagramSorted;
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]


// Lesson 18: Formatting Bands
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data.forEach(band => {
    band.country = "Canada";
    band.name = band.name.replaceAll(".", "");
    band.name = band.name.split(" ").map(word => {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    }).join(" ");
  });

  return data;
}


console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]


// Lesson 19: Class Records Summary
let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


function generateClassRecordSummary(studentScores) {
  studentScores = Object.values(studentScores).map(score => score.scores);
  examScores = studentScores.map(score => score.exams);

  return {
    studentGrades: gradeSummary(studentScores),
    exams: examSummary(examScores),
  }
}

function reduceSum(array) {
  return array.reduce((acc, val) => acc + val);
}

function gradeSummary(studentScores) {
  let gradeSummary = [];

  studentScores.forEach(score => {
    let examsAverage = reduceSum(score.exams) / score.exams.length;
    let exerciseTotal = reduceSum(score.exercises);

    let finalGrade = Math.round((examsAverage * 0.65) + (exerciseTotal * 0.35));

    if (finalGrade >= 93 && finalGrade <= 100) {
      gradeSummary.push(`${finalGrade} (A)`);
    } else if (finalGrade >= 85 && finalGrade <= 92) {
      gradeSummary.push(`${finalGrade} (B)`);
    } else if (finalGrade >= 77 && finalGrade <= 84) {
      gradeSummary.push(`${finalGrade} (C)`);
    } else if (finalGrade >= 69 && finalGrade <= 76) {
      gradeSummary.push(`${finalGrade} (D)`);
    } else if (finalGrade >= 60 && finalGrade <= 68) {
      gradeSummary.push(`${finalGrade} (E)`);
    } else {
      gradeSummary.push(`${finalGrade} (F)`);
    }
  });

  return gradeSummary;
}

function examSummary(studentExams) {
  let summary = [];

  for (let i = 0; i < 4; i++) {
    let examGrades = studentExams.map(exams => exams[i]);
    let average = reduceSum(examGrades) / studentExams.length;
    let minimum = Math.min(...examGrades);
    let maximum = Math.max(...examGrades);

    summary.push({ average, minimum, maximum });
  }

  return summary;
}

console.log(generateClassRecordSummary(studentScores));

/*
returns:

{
  "studentGrades": [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  "exams": [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}

*/