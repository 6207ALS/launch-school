class Boomerang {
  static boomerang(array) {
    let numOfElbows = 0;

    for (let idx = 1; idx < array.length - 1; idx++) {
      let [prev, curr, next] = [array[idx - 1], array[idx], array[idx + 1]];
      if (Boomerang.isPlateau(prev, curr, next)) return false;
      if (Boomerang.isElbow(prev, curr, next)) numOfElbows++;
    }

    return (numOfElbows === 1);
  }

  static isElbow(prev, curr, next) {
    if (prev < curr && next < curr) {
      return true;
    } else if (prev > curr && next > curr) {
      return true;
    } else {
      return false;
    }
  }

  static isPlateau(prev, curr, next) {
    return (prev === curr || curr === next);
  }
}

module.exports = Boomerang;