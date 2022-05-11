import {Node} from "./Node";

export class Tree {
    root: Node
    count: number

    constructor(value) {
        this.root = new Node(value)
        this.count = 1
    }

    insert(data: number) {
        let newNode = new Node(data);

        function searchInsert(node) {
            if (newNode.value < node.value) {
                if (!node.left) {
                    node.left = newNode
                } else {
                    searchInsert(node.left)
                }
            } else if (newNode.value > node.value) {
                if (!node.right) {
                    node.right = newNode
                } else {
                    searchInsert(node.right)
                }
            }
        }

        searchInsert(this.root)
        this.count++
    }

    inOrder() {
        let result = []

        function _inOrder(node) {
            if (node.left) {
                _inOrder(node.left)
            }
            result.push(node.value)
            if (node.right) {
                _inOrder(node.right)
            }

        }
        _inOrder(this.root)
        return result
    }
    preOrder(){
        let result=[]
        function _preOrder(node) {
            result.push(node.value)
            if(node.left){
                _preOrder(node.left)
            }
            if(node.right){
                _preOrder(node.right)
            }
        }
        _preOrder(this.root)
        return result
    }
    findMinNode(){
        let _findMinNode = node =>{
            if(node.left===null){
                return node
            }else{
                _findMinNode(node.left)
            }
        }
       return  _findMinNode(this.root)
    }
    findMaxNode(){
        let _findMaxNode = node =>{
            if(node.right===null){
                return node
            }else {
                _findMaxNode(node.right)
            }
        }
        return _findMaxNode(this.root)
    }
}

let newTree = new Tree(40)
newTree.insert(30);
newTree.insert(45);
newTree.insert(22);
newTree.insert(23);
console.log(newTree.inOrder());