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

  intersection() {}

  union() {}

  difference() {}

  static intersection() {}

  static union() {}

  static difference() {}
}

module.exports = { Set };
