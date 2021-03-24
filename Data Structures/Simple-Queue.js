class SimpleQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length == 0;
  }

  peek() {
    return !this.isEmpty() ? this.items[0] : undefined;
  }
}
