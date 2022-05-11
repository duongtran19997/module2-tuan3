import {Node} from "./Node";
export class Tree{
    root:Node
    count:number
    constructor(value) {
        this.root= new Node(value)
        this.count = 0
    }
    insert(value):void{
        let newNode = new Node(value)
        function _insert(node) {
            if(newNode.key<node.key){
                if(!node.left){
                    node.left = newNode
                }else{
                    _insert(node.left)
                }
            }else if(newNode.key>node.key){
                if (!node.right){
                    node.right= newNode
                }else{
                    _insert(node.right)
                }
            }
        }
       _insert(this.root)
    }
    preOrder(){
        let result = []
        function _preOrder(node){
            result.push(node);
            if (node.left) {
                _preOrder(node.left)
            }
        if (node.rigt){
            _preOrder(node.right)
        }
        }
        _preOrder(this.root)
        return result
    }
    postOrder(){
        let result = []
        function _postOrder(node){
            result.push(node);
            if (node.left) {
                _postOrder(node.left)
            }
            if (node.right){
                _postOrder(node.right)
            }
        }
        _postOrder(this.root)
        return result
    }
    findCurrent(value){
        function find(node){
            if(node===null){
                return null
            }else if(value<node.key){
                    find(node.left)
                }
                if(node.key<value){
                    find(node.right)
                }
                else{
                    return true
            }
        }
        find(this.root)
    }
}