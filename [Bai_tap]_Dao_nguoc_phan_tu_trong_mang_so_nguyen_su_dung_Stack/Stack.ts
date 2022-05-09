export class Stack{
    private storage = []
    constructor() {
    }
    push(item){
        return this.storage.push(item)
    }
    pop(){
        return this.storage.pop()
    }
    size(){
        this.storage.length
    }
}

let array:any = [1,2,5,'chim',4,'ga']
let stack = new Stack()

for (let i=0;i<array.length;i++){
    stack.push(array[i])
}
console.log(stack);
console.log(array);
for(let i=0;i<6;i++){
    array[i]=stack.pop()
}
console.log(array);