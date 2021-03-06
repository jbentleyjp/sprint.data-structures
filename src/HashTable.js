const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    //O(1)
    const index = simpleHash(key, this.limit);
    this.storage[index] = value;
  }

  retrieve(key) {
    //O(1)
    const index = simpleHash(key, this.limit);
    return this.storage[index];
  }

  remove(key) {
    //O(1)
    const index = simpleHash(key, this.limit);

    if (this.storage[index]) {
      this.storage[index] = null;
      return true;
    }
    return false;
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
