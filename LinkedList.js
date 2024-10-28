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
//  2 - 4 - 6
  insert(index ,value){
        if(index ===0){
            return this.prepend(value)
        }
        const requiredNode = this.traverseToIndex(index-1)
        const newNode = {
            value:value,
            next:requiredNode.next
        }
        
        requiredNode.next = newNode
        return this

  }

  traverseToIndex(index){

    let counter = 0
    let currentNode = this.head
    while(counter!==index){
        currentNode = currentNode.next
        counter++
    }
    return currentNode

  }

}

const linkedList = new LinkedList(1)

console.log("append",linkedList.append(2))
console.log("append",linkedList.append(4))

console.log("append",linkedList.append(6))

console.log("append complete",JSON.stringify(linkedList.append(8)))


console.log("append complete",JSON.stringify(linkedList.insert(2,3)))


