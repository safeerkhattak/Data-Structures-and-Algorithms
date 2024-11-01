class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    // In stack we add one on top of another.
    this.array.push(value);

    return this;
  }
  pop() {
    if (this.array.length === 0) {
      return null;
    }
    this.array.pop();

    return this;
  }
}

const stack = new Stack();
console.log("first", stack.push("google"));

console.log("first", stack.push("udemy"));

console.log("first", stack.push("discort"));

console.log("first", stack.pop());
console.log("first", stack.pop());
console.log("first", stack.pop());
