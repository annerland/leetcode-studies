class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    this.value = value;
    var nextNode = new Node(value);
    if (this.length === 0) {
      this.head = nextNode;
      this.tail = nextNode;
    } else {
      this.tail.next = nextNode;
      nextNode.prev = this.tail;
      this.tail = nextNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(value) {
    this.value = value;
    var newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= (this.length / 2)) {
      var count = 0;
      var current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      var count = this.length - 1;
      var current = this.tail;
      while (count !== index) {
        current = this.tail.prev;
        count--;
      }
      return current;
    }
  }

  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) this.unshift();
    if (index === this.length) this.push();
    var newNode = new Node(value);
    var prevNode = this.get(index - 1);
    var afterNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

var list = new DoubleLinkedList();
