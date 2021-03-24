class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add an element to end of the queue
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // Remove and return element from start of queue
  dequeue() {
    if (this.count == 0) {
      return undefined;
    }
    let deletedItem = this.items[0];
    this.items.splice(0, 1);
    this.count--;
    return deletedItem;
  }

  // Return the front element without removing
  peek() {
    return this.items[0];
  }
}
