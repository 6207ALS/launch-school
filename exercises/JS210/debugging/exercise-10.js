// JS210 Exercises | Debugging
// Exercise 10 - Weekday Classes

/*
There are a lot of exciting classes offered in our region. We wrote a small 
script that checks which ones are still upcoming and compatible with our 
calendar. We must be available to attend all sessions of a particular class 
in order to sign up for it. We can always arrange that on weekends, but for 
weekdays we have to check whether our calendar is free.

Although the code below runs, something is wrong with it. Why is everything 
except for the Back To The Future Movie Night in the list of compatible classes?
*/

const TODAY = toDate("2018-08-05");

function toDate(string) {
  return new Date(`${string}T00:00:00`);
}

function toString(date) {
  // return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`;
	let year = date.getFullYear();
	let month = String(date.getMonth() + 1).padStart(2, 0);
	let day = String(date.getDate()).padStart(2, 0);
	return `${year}-${month}-${day}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 &&
         date.getDay() <= 5;
}

const myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"],
};

const offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"],
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    const dateStr = toString(date);
		console.log(dateStr);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  };

  const compatibleClasses = [];

  Object.keys(classes).forEach(className => {
    const classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]


/*
The issue with the code above is how the "toString" function on line 21 is 
implemented. The getYear(), getMonth(), and getDay() functions are used to 
retrieve the year, month, and day of a Date object, respectively. However, the
returned values of these functions are not what is expected. 

The getYear() function will return the difference between 1900 and the 
Date object's year. Thus, a Date object with the year 2018 will result in 118.
	- The solution would be use the getFullYear() function instead to retrieve
		the expected output. Calling the getFullYear() function on a Date object
		with the year 2018 results in the number 2018

The getMonth() function will return the month of the Date object zero-indexed.
This means if the Data object's month is 07 (July), then the function will
return the number 6. (The month January returns 0)
	- The solution would be to increment the returned value of getMonth() by 1
		to accurately represent the months of the year (1 - 12).
	- In addition, the padStart() function should be used to ensure that the month
		portion of the string is at least 2 characters long (as demonstrated on line 
		24).

Finally, the getDay() function will return the day of the **week** of the Date
object (zero-indexed). This means that a Date object with the date "2018-09-11"
will return 2, indicating that it is the third day of the week (Tuesday). The
function will NOT return the date's day of the month, which is 11. 
	- The solution would be to use the getDate() function instead, which returns
		the day of the month rather than the day of the week.
	- Again, the padStart() function should be used to ensure that the day
		portion of the string is at least 2 characters long (as demonstrated on line 
		25).
*/