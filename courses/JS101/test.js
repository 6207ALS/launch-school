class Boomerang {
  static boomerang(array) {
    let numOfElbows = 0;
    for (let i = 1; i < array.length - 1; i++) {
      let [prev, curr, next] = [array[i - 1], array[i], array[i + 1]];
      if (Boomerang.isElbow(prev, curr, next)) numOfElbows++;
    }

    return (numOfElbows === 1);
  }

  static isElbow(prev, curr, next) {
    if (prev < curr && next < current) {
      return true;
    } else if (prev > curr && next > curr) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Boomerang;