/*
PROBLEM:
Create a clock that returns the military time at a given hour, and minutes (if
provided). 

static at()
  returns a Clock object that represents the time, with hours and minutes

instance toString()
  returns the string representation of the Clock object

instance add(minutes)
  adds provided number of minutes to calling Clock object

instance substract(minutes)
  subtracts provided number of minutes to calling Clock object

EXAMPLES:

  time with just hours:
    Clock.at(8).toString()
    '08:00'


  time with hours and minutes:
    Clock.at(11, 9).toString()
    '11:09'


  'add' and "substract' do not mutate calling object (returns new Clock object)
    let oldClock = Clock.at(10);
    let newClock = oldClock.add(3);
    oldClock !== newClock -> true

ALGORITHM:

Clock.at(hours, minutes)
  return an instance of Clock type whose 'hours' property is set to argument and
  'minutes' property is set to argument

instance.toString() 
  return a string representation of calling Clock object

instance.add(minutes) 
  convert clock's time to minutes
  ensure given minutes is within 1440 minutes (minutes in 1 day)

  sumInMinutes = clock's time + given minutes
  ensure sumInMinutes is within 1440 minutes (minutes in 1 day)

  extract time's hours in sumInMinutes
  extract time's minutes in sumInMinutes

instance.subtract(minutes)
  convert clock's time to minutes
  ensure given minutes is within 1440 minutes (minutes in 1 day)

  differenceInMinutes = clock's time - given minutes

  if difference is positive
    add difference to 00:00
  if difference is negative
    substract ABS(difference) from 24:00

  extract time's hours in sumInMinutes
  extract time's minutes in sumInMinutes
*/

class Clock {
  constructor(hour, minutes=0) {
    this.hour = hour;
    this.minutes = minutes; 
  }

  static at(hour, minutes) {
    return new Clock(hour, minutes);
  }

  static MINUTES_IN_DAY = 24 * 60;

  toString() {
    let hour = String(this.hour).padStart(2, "0");
    let minutes = String(this.minutes).padStart(2, "0");
    
    return `${hour}:${minutes}`;
  }

  add(addedMinutes) {
    let clockMinutes = (this.hour * 60) + this.minutes;
    addedMinutes = addedMinutes % Clock.MINUTES_IN_DAY; // ensure addedMinutes is within 24 hours
    
    let sumInMinutes = (clockMinutes + addedMinutes) % Clock.MINUTES_IN_DAY; // ensure totalMinutes is within 24 hours
    let hour = Math.floor(sumInMinutes / 60);
    let minutes = sumInMinutes % 60;

    return new Clock(hour, minutes);
  }

  subtract(subtractedMinutes) {
    let clockMinutes = (this.hour * 60) + this.minutes;
    subtractedMinutes = subtractedMinutes % Clock.MINUTES_IN_DAY;

    let difference = (clockMinutes - subtractedMinutes);

    if (difference < 0) difference = 1440 - Math.abs(difference);
    
    let hour = Math.floor(difference / 60);
    let minutes = difference % 60;

    return new Clock(hour, minutes);
  }

  isEqual(clockObject) {
    for (let property in this) {
      if (!clockObject.hasOwnProperty(property)) return false;
      if (!(clockObject[property] === this[property])) return false;
    }

    return true;
  }
}

module.exports = Clock;