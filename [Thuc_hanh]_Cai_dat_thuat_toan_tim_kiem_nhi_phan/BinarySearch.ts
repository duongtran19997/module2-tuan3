class BinarySearch {
    number: number[] = []

    constructor() {
    }

    push(arr: number) {
        this.number.push(arr)
        return
    }

    find(low, high, taget) {
        // low = 0
        // high = this.number.length
        if (low <= high) {
            let mid = Math.floor((low + high) / 2)
            let index

            if (this.number[mid] == taget) {
                index = mid
                this.find(low, mid - 1, taget)
            } else if (taget > this.number[mid]) {
                this.find(mid + 1, high, taget)
            } else {
                this.find(low, mid - 1, taget)
            }
            return index
        }
    }
}

let binary = new BinarySearch()
binary.push(1)
binary.push(32)
binary.push(32)
binary.push(32)
binary.push(32)
binary.push(33)
binary.push(34)
binary.push(36)
binary.push(39)
console.log(binary.find(0, 8, 32));