class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add element to stack and return length
  push(element) {
    this.items[this.count] = element;
    this.count++;
    return this.count;
  }

  // Remove and return element from top of stack
  pop() {
    if (this.count == 0) {
      console.log("Stack is empty");
      return undefined;
    }
    let deletedItem = this.items[this.count];

    // note: splice instead of delete to avoid empty array items
    this.items.splice(this.count - 1, 1);

    this.count--;
    return deletedItem;
  }
}
