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

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  //  2 - 4 - 6
  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    const requiredNode = this.traverseToIndex(index - 1);
    const newNode = {
      value: value,
      next: requiredNode.next,
    };

    requiredNode.next = newNode;
    return this;
  }
  //4-6-8-10
  reverseLinkedList() {
    if (!this.head.next) {
      return this.head;
    }
    let currentNode = this.head;
    this.tail = currentNode;
    let nextNode = this.head.next;
    while (nextNode !== null) {
      let temp = nextNode.next;
      nextNode.next = currentNode; // we switch the pointer of second to first (now 6 has pointer pointing to 4)
      currentNode = nextNode; // now we swap the variables (the first element 4 now become 6)
      nextNode = temp; // now the second
    }
    this.head.next = null; //now the 1 point to null
    this.head = currentNode; // the first is now last node which is 10
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const linkedList = new LinkedList(1);

console.log("append", linkedList.append(2));
console.log("append", linkedList.append(4));

console.log("append", linkedList.append(6));

console.log("append complete", JSON.stringify(linkedList.append(8)));

// console.log("append complete", JSON.stringify(linkedList.insert(2, 3)));

console.log("append complete", JSON.stringify(linkedList.reverseLinkedList()));
