export class Node {
    left:Node|null=null
    right:Node|null=null
    key:number
    constructor(key) {
        this.key = key
        this.left=null
        this.right= null
    }
}