import {Node} from "../[Bài tập] Cài đặt thao tác duyệt theo thứ tự preorder trong BST/Node";

class Tree {
    root: Node | null

    constructor() {
        this.root = null
    }

    insert(value) {

        function _insert(node, value) {
            if (value < node.key) {
                if (!node.left) {
                    node.left = new Node(value)
                } else {
                    _insert(node.left, value)
                }
            } else if (value > node.key) {
                if (!node.right) {
                    node.right = new Node(value)
                } else {
                    _insert(node.right, value)
                }
            }
        }

        _insert(this.root, value)
    }

    findMin(node) {
        if (node.left) {
            return this.findMin(node.left)
        } else {
            return node
        }
    }

    findMax(node) {
        if (node.right) {
            return this.findMin(node.right)
        } else {
            return node
        }
    }
    findNode(value){
        
    }
}