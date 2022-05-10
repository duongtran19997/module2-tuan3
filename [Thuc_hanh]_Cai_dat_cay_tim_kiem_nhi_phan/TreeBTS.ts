import {Class} from "./AbstractTree";
import {TreeNode} from "./TreeNode";

export interface TreeBST<E> {
    insert(e: E): boolean

    inorder(): void

    getSize(): number
}

export class BST<E> extends Class<E> {
    protected root: TreeNode<E>
    protected size: number = 0;

    public BST(objects: E[]) {
        for (let i = 0; i < objects.length; i++) {
            this.insert(objects[i])
        }
    }

    protected creatNewNode(e: E): TreeNode<any> {
        return new TreeNode<any>(e)
    }

    public insert(e: any): boolean {

        if (this.root == null) {
            this.root = this.creatNewNode(e); /*create a new root*/
        }
        else {
            /*locate the parent node*/
            let parent: TreeNode<any> = null;
            let current: TreeNode<any> = this.root;
            while (current != null) {
                if (e.localeCompare(current.Element) < 0) {
                    parent = current;
                    current = current.left;
                }if (e.localeCompare(current.Element) > 0) {
                    parent = current;
                    current = current.right;
                } else
                    return false;
            }
        }
        if(e.localeCompare(parent.Element)<0){
            parent.left = this.creatNewNode(e)
        }
        else {
            parent.right = this.creatNewNode(e)
        }
        this.size++
        return  true
    }
}