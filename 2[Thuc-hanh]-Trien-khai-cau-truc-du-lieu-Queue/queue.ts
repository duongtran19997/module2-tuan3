export interface IQueue<T> {
    enqueue(item: T): void

    dequeue(): T | undefined

    size(): number
}

export class Queue<T> implements IQueue<T> {
    private storage: T[] = []
    private readonly capacity: number

    constructor(capacity: number = Infinity) {
        this.capacity = capacity
    }

    enqueue(item: T) {
        if (this.size() === this.capacity) {
            throw Error('stack over flow')
        } else {
            this.storage.push(item)
        }
    }

    dequeue(): T | undefined {
        return this.storage.shift()
    }

    size(): number {
        return this.storage.length
    }
}