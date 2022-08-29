class Queue {
    constructor()
    {
        this.item=[]
        this.head=0
        this.tail =0
    }
    isempty(){
        return this.head == this.tail
    }

    enqueue(val)
    {
        this.item[this.tail]=val
        this.tail = this.tail +1
    }
    dequeue(){
        this.head = this.head+1

        
    }

    peek(){
        return this.item[this.head]
    }
}
let obj1 = new Queue()
obj1.enqueue(44)
obj1.enqueue(50)
obj1.enqueue(30)
obj1.dequeue()
console.log(obj1.peek())