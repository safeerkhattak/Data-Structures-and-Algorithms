class NewArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
    return;
  }
  pop() {
    const elementToBeRemoved = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return elementToBeRemoved;
  }

  delete(index) {
    const elementToBeRemoved = this.data[index];
    delete this.data[index];
    this.shiftIndex(index);
    this.length--;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length-1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}

const arr = new NewArray();
console.log("push", arr.push("my"));

console.log("push", arr.push("name"));

console.log("push", arr.push("is"));

console.log("push", arr.push("safeer"));
arr.delete(2);
console.log("data", arr.data, "length", arr.length);
