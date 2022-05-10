export class TreeNode<E> {
    public Element:E
    public left:TreeNode<E>
    public right:TreeNode<E>
    constructor(e:E) {
        this.Element=e;
    }
}