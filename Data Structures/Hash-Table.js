function hashStringToInt(string, tableSize) {
  // start at a prime num to spread out where keys are stored --> randomisation for O(1)
  let hash = 17;

  for (let i = 0; i < string.length; i++) {
    hash = hash + string.charCodeAt(i);
  }

  return hash % tableSize;
}

class HashTable {
  table = new Array(100);

  setItem = (key, value) => {
    const index = hashStringToInt(key, this.table.length);
    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  };

  getItem = (key) => {
    const index = hashStringToInt(key, this.table.length);

    if (!this.table[index]) {
      return null;
    } else {
      return this.table[index].find((x) => x[0] === key)[1];
    }
  };
}
