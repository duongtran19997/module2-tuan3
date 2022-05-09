export class Queue{
    private storage:string[] = []
    constructor(storage:string) {
        this.storage=storage.split('')
    }
    enqueue(item:string){
        this.storage.push(item)
    }
    dequeue(){
        return this.storage.shift()
    }
    size(){
        return this.storage.length
    }
}