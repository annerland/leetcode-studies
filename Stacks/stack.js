class Plate {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  push(value) {
    var newPlate = new Plate(value);
    if (this.size === 0) {
      this.first = newPlate;
      this.last = newPlate;
    } else {
      var oldFirst = this.first;
      this.first = newPlate;
      this.first.next = oldFirst;
    }

    return ++this.size;
  }
  pop() {
    if (this.size === 0) return null;
    var poppedPlate = this.first;
    if (this.first === this.last) {
      this.last = null;
    } 
    this.first = poppedPlate.next;
    this.size--;
    return poppedPlate.value;
  }
}