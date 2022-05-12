export class Node{
    left:Node|null
    right:Node|null
    data:number
    constructor(data:number) {
        this.right=null
        this.left=null
        this.data=data
    }
}