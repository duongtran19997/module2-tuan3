export class Node {
    left:Node|null
    right:Node|null
    key:number
    constructor(left,right,key:number) {
        this.left=null
        this.right=null
        this.key=key
    }
}