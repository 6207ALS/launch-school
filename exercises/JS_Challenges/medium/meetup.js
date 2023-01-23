/*
PROBLEM:

Define a "Meetup" class that takes "year" and "month" arguments for its
constructor. The class should have a 'day' instance method that takes a day of
the week (as a string) and its descriptor ('first', 'second', 'third', 'fourth', 
'fifth', 'last', or 'teenth') as the arguments. The output is the exact date
that the arguments describe for that object's year and month. 

  - "teenth" is a made up word. There was a meetup whose members realised that 
    there are exactly 7 days that end in '-teenth'. Therefore, it's guaranteed 
    that each day of the week (Monday, Tuesday, ...) will have exactly one date 
    that is the "teenth" of that day in every month. That is, every month has 
    exactly one "teenth" Monday, one "teenth" Tuesday, etc.


EXAMPLE: 

2nd Wednesday of May 2021 -> 12th of May, 2021.


DATA STRUCTURE:
  - working with Date objects
  - objects contain - descriptors ('first', 'second', ...)
                      days of the week ('monday', 'tuesday', ...)

ALGORITHM:

  STATIC DESCRIPTORS = {
    'first': 1,
    'second': 2,
    'third': 3,
    'fourth': 4,
    'fifth': 5,
    'last': _,
    'teenth': _,
  }

  STATIC DAYS = {
    "sunday": 0,
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thurday": 4,
    "friday": 5,
    "saturday": 6,
  }

  STATIC TEENTHS = [13, 14, 15, 16, 17, 18, 19]

  DATE CLASS
    CONSTRUCTOR(YEAR, MONTH)
      
    INSTANCE DAY(DAY, DESCRIPTOR) 
      IF THE DESCRIPTOR IS "TEENTH"
        INVOKE FUNCTION FOR 'TEENTH'
      ELSE IF DESCRIPTOR IS "LAST"
        INVOKE FUNCTION FOR 'LAST'
      ELSE
        INVOKE FUNCTION FOR REGULAR DATE

    INSTANCE TEENTH(DAY)
      FROM DATES 13 - 19 OF THE MONTH
        IF THE CURRENT DATE IS THE DAY
          RETURN CURRENT DATE

    INSTANCE LAST(DAY)
      FROM DATES 31 TO DAY 1 OF THE MONTH
        IF THE CURRENT DATE IS THE DAY
          RETURN CURRENT DATE

    INSTANCE REGULAR(DAY)
      DETERMINE DATE OF FIRST (DAY) OF THE MONTH
      RETURN FIRST DATE + (DESCRIPTOR * 7) DAYS 

*/

"use strict";

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }
  
  static DESCRIPTORS = {
    'first': 1,
    'second': 2,
    'third': 3,
    'fourth': 4,
    'fifth': 5,
  }

  static DAYS = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
  }

  day(day, descriptor) {
    day = day.toLowerCase();
    descriptor = descriptor.toLowerCase();

    if (descriptor === 'teenth') {
      return this.teenthDay(day);
    } else if (descriptor === 'last') {
      return this.lastDay(day);
    } else {
      return this.standardDay(day, descriptor);
    }
  }

  teenthDay(day) {
    let currentDate;
    let currentDay;

    for (let i = 13; i <= 19; i++) {
      currentDate = new Date(this.year, this.month - 1, i);
      currentDay = currentDate.getDay();
      if (Meetup.DAYS[currentDay] === day) return currentDate; 
    }

    console.log(currentDay);
  }

  standardDay(day, descriptor) {
    descriptor = Meetup.DESCRIPTORS[descriptor];

    let desiredDay = this.firstDay(day) + (7 * (descriptor - 1));
    let possibleDate = new Date(this.year, this.month - 1, desiredDay);

    if (possibleDate.getMonth() !== this.month - 1) {
      return null;
    } else {
      return possibleDate;
    }
  }

  firstDay(day) {
    let startingDay;
    let date;

    for (let j = 1; j <= 7; j++) {
      date = new Date(this.year, this.month - 1, j);

      if (Meetup.DAYS[date.getDay()] === day) {
        startingDay = date.getDate();
        break;
      }
    }

    return startingDay;
  }

  lastDay(day) {
    let possibleDate;

    for (let i = 31; i >= 1; i--) {
      possibleDate = new Date(this.year, this.month - 1, i);

      if (possibleDate.getMonth() !== this.month - 1) {
        continue;
      } else if (Meetup.DAYS[possibleDate.getDay()] === day) {
        return possibleDate;
      }
    }
  }
}

module.exports = Meetup;