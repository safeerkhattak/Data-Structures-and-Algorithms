class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }

}

class Stack{
    constructor(){
        this.top=null;
        this.bottom=null
        this.length=0
    }

    push(value){ // In stack we add one on top of another.
            const newNode = new Node(value)
            if(this.length===0){
                this.top=newNode
                this.bottom=newNode
            }else{
                newNode.next = this.top
                this.top = newNode
            }

            this.length++
            return this
    }
    pop(){
        if(this.length===0){
            return null
        }
        if(this.top === this.bottom){
            this.top= null
            this.bottom = null
        }else{

            this.top = this.top.next
        }
            this.length--
            return this
    }
}


const stack =  new Stack()
console.log("first",stack.push("google"))

console.log("first",stack.push("udemy"))

console.log("first",stack.push("discort"))

console.log("first",stack.pop())
console.log("first",stack.pop())
console.log("first",stack.pop())