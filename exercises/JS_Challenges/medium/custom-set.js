class CustomSet {
  constructor(array=[]) {
    this.set = {};

    for (let element of array) {
      this.set[element] = true;
    }
  }

  returnSet() {
    return this.set;
  }

  isEmpty() {
    return Object.keys(this.set).length === 0;
  }

  contains(element) {
    return this.returnSet().hasOwnProperty(element);
  }

  isSubset(otherSet) {
    for (let element in this.set) {
      if (!(otherSet.contains(element))) return false;
    }

    return true;
  }

  isDisjoint(otherSet) {
    for (let element in this.set) {
      if ((otherSet.contains(element))) return false;
    }

    return true;
  }

  isSame(otherSet) {
    let setsAreSameSize = this.size() === otherSet.size();
    if (!(setsAreSameSize)) return false;

    for (let element in this.returnSet()) {
      if (!(otherSet.contains(element))) return false;
    }

    return true;
  }

  add(element) {
    if (this.contains(element)) return this;

    this.returnSet()[element] = true;
    return this;
  }

  intersection(otherSet) {
    let intersectionSet = new CustomSet();

    for (let element in this.returnSet()) {
      if (otherSet.contains(element)) intersectionSet.add(element);
    }

    return intersectionSet;
  }

  size() {
    return Object.keys(this.returnSet()).length;
  }

  difference(otherSet) {
    let differenceSet = new CustomSet();

    for (let element in this.returnSet()) {
      if (!otherSet.contains(element)) differenceSet.add(element);
    }

    return differenceSet;
  }

  union(otherSet) {
    let uniqueElements = {};

    for (let element in this.returnSet()) {
      if (!(uniqueElements[element])) uniqueElements[element] = true;
    }

    for (let element in otherSet.returnSet()) {
      if (!(uniqueElements[element])) uniqueElements[element] = true;
    }

    return new CustomSet(Object.keys(uniqueElements));
  }
}

module.exports = CustomSet;