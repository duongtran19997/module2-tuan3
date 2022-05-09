interface IStack {
    push(item:string):void
    pop():string|undefined
    size():number
}
export class Stack implements IStack{
    private storage:string[] = []
    constructor(private capacity:number=Infinity,storage:string) {
        this.storage=storage.split('')
    }
    push(item: string) {
        if(this.size()===this.capacity){
            throw Error('khong them duoc')
        }else{
        return this.storage.push(item)

    }
    }
    pop(): string | undefined {
        return this.storage.pop()
    }
    size(): number {
        return this.storage.length
    }
}