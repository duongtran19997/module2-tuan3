export interface IStack<T> {
    push(item: T): void;

    pop(): T | undefined;

    size(): number
}

export class Stack<T> {
    private storage: T[] = []
    capacity: number

    constructor(capacity: number = Infinity) {
        this.capacity = capacity
    }

    push(item: T): void {
        if (this.size() === this.capacity) {
            this.storage.push(item)
        }
    }

    pop(): T | undefined {
        return this.storage.pop()
    }

    size(): number {
        return this.storage.length
    }
}