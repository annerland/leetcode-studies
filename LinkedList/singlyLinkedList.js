class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    var newNode = new Node(value)
    
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    var current = this.head;
    var newTail = current;

    if (!this.head) return undefined;
    while (current.next) {
      newTail = current;
      current = current.next;      
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var tempHead = this.head;
    this.head = tempHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return tempHead;
  }
}

var list = new SinglyLinkedList();