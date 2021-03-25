// Implementation without a tail pointer

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add element
  append(element) {
    var node = new Node(element);

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        curent = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
