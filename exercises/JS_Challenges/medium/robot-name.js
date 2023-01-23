class Robot {
  static usedNames = {}

  name() {
    if (!this.hasOwnProperty("randomName")) this.reset();
    return this.randomName;
  }

  reset() {
    this.randomName = this.generateRandomName();
  }

  generateRandomName() {
    let name = "";

    for (let i = 0; i < 2; i++) {
      name += this.randomLetter();
    }

    for (let i = 0; i < 3; i++) {
      name += this.randomNumber();
    }

    if (Robot.usedNames.hasOwnProperty(name)) {
      return this.generateRandomName();
    } else {
      Robot.usedNames[name] = true;
      return name;
    }
  }

  randomLetter() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomIndex = Math.floor(Math.random() * letters.length);

    return letters[randomIndex];
  }

  randomNumber() {
    let numbers = "0123456789";
    let randomIndex = Math.floor(Math.random() * numbers.length);

    return numbers[randomIndex];
  }
}

module.exports = Robot;