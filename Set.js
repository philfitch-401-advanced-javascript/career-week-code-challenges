class Set {
  constructor() {this.array = []}

  add(item) {
    if(!this.array.includes(item)) {
      this.array.push(item);
    }
  }

  remove(item) {
    if(this.array.includes(item)) {
      let idx = this.array.indexOf(item);
      this.array.splice([idx], 1);
    }
  }

  has(item) {
    return this.array.includes(item);
  }

  intersection(iArray) {
    let intersectionSet = new Set;
    for(let i = 0; i < iArray.length; i++) {
      if(this.array.includes(iArray[i])) {
        intersectionSet.array.push(iArray[i]);
      }
    }
    return intersectionSet;
  }

  union(uArray) {
    let unionSet = this;
    for(let i = 0; i < uArray.length; i++) {
      if(!unionSet.array.includes(uArray[i])) {
        unionSet.array.push(uArray[i]);
      }
    }
    return unionSet;
  }

  difference(dArray) {
    let differenceSet = new Set;
    for(let i = 0; i < this.array.length; i++) {
      if(!dArray.includes(this.array[i])) {
        differenceSet.array.push(this.array[i]);
      }
    }
    for(let i = 0; i < dArray.length; i++) {
      if(!this.array.includes(dArray[i])) {
        differenceSet.array.push(dArray[i]);
      }
    }
    return differenceSet;
  }

  static intersection(set1, set2) {
    let intersectionSet = new Set;
    for(let i = 0; i < set2.array.length; i++) {
      if(set1.array.includes(set2.array[i])) {
        intersectionSet.array.push(set2.array[i]);
      }
    }
    return intersectionSet;
  }

  static union(set1, set2) {
    let unionSet = set1;
    for(let i = 0; i < set2.array.length; i++) {
      if(!unionSet.array.includes(set2.array[i])) {
        unionSet.array.push(set2.array[i]);
      }
    }
    return unionSet;
  }

  static difference(set1, set2) {}
}

module.exports = { Set };
