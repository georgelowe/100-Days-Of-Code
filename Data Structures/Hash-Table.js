// Convert the key to an integer to be used as the table index
function hashStringToInt(string, tableSize) {
  // Start on a prime to spread where keys are stored --> randomisation O(1)
  let hash = 17;

  for (let i = 0; i < string.length; i++) {
    hash = hash + string.charCodeAt(i);
  }
  return hash % tableSize;
}

class HashTable {
  table = new Array(100);

  // Set a key and value pair within the table
  setItem = (key, value) => {
    const index = hashStringToInt(key, this.table.length);

    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  };

  // Return the value of an item given a key
  getItem = (key) => {
    const index = hashStringToInt(key, this.table.length);
    if (this.table[index] && this.table[index].find((x) => x[0] === key)) {
      return this.table[index].find((x) => x[0] === key)[1];
    } else {
      return null;
    }
  };

  // Check that a key exists in the table
  checkExists = (key) => {
    const index = hashStringToInt(key, this.table.length);
    if (this.table[index]) {
      return this.table[index].find((x) => x[0] === key) ? true : false;
    } else {
      return false;
    }
  };

  // Remove an item and return it
  removeItem = (key) => {
    const index = hashStringToInt(key, this.table.length);

    if (!this.table[index]) {
      console.log("success");
      return null;
    } else {
      var del = this.table[index].indexOf(
        this.table[index].find((x) => x[0] === key)
      );
      return this.table[index].splice(del, 1);
    }
  };

  // Helper function: show list of collisions
  showLinkedList = (key) => {
    const index = hashStringToInt(key, this.table.length);
    return this.table[index];
  };
}
