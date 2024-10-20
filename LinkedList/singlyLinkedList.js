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

  unshift(value) {
    var newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    var node = this.get(index);
    if (!node) return false;
    node.value = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    var newNode = new Node(value);
    var prevNode = this.get(index - 1);
    var temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();
    var prevNode = this.get(index - 1);
    var removedNode = prevNode.next;

    prevNode.next = removedNode.next;

    this.length--;
    return removedNode;
  }

  reverse() {
    var node = this.head;	
    this.head = this.tail;
    var next;
    var prev = null;

    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

var list = new SinglyLinkedList();