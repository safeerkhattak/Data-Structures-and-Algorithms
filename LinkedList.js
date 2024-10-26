class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    return this;
  }

  append(value){
    const newNode = {
        value: value,
        next: null,
      };

      this.tail.next = newNode
      this.tail = newNode
      return this
  }

}

const linkedList = new LinkedList(2)

console.log("append",linkedList.append(4))

console.log("append",linkedList.append(6))

console.log("append",linkedList.prepend(1))
console.log("append complete",JSON.stringify(linkedList.append(8)))


