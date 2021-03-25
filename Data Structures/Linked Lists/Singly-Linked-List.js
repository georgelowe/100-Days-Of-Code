// Implementation without a tail pointer

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add element to end of list
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

  // remove and return element from list
  remove(element) {
    var current = this.head;
    var prev = null;
    while (current) {
      if (current.element == element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    // not present
    return -1;
  }

  // return index of element
  indexOf(element) {
    var current = this.head;
    var count = 0;

    while (current) {
      if (current.element == element) {
        return count;
      }
      count++;
      current = current.next;
    }

    // not present
    return -1;
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
