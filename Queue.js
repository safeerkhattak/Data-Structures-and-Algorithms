class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    // In stack we add one on top of another.
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) {
      return null;
    }
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      // let referencePointer = this.top
      this.first = this.first.next;
    }
    this.length--;
    return this;
  }
}

const queue = new Queue();
console.log("first", queue.enqueue("safeer"));

console.log("first", queue.enqueue("ahmad"));

console.log("first", queue.enqueue("ubaid"));

console.log("deque", queue.dequeue());
console.log("deque", queue.dequeue());
console.log("deque", queue.dequeue());
