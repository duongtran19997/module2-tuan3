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
}