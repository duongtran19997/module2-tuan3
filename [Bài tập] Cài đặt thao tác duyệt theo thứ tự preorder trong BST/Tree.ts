import {Node} from "./Node";

export class Tree {
    root: Node | null
    count: number

    constructor() {
        this.root = null
        this.count = 0
    }

    insert(data: number) {
        let newNode = new Node(data);
        this.count++
        let _insert = node => {
            if (newNode.data < node.data) {
                if (!node.left) {
                    return node.left = newNode
                } else {
                    _insert(node.left)
                }
            } else if (newNode.data > node.data) {
                if (!node.right) {
                    return node.right = newNode
                } else {
                    _insert(node.right)
                }
            }
        }
        _insert(this.root)
    }

    findNode(value) {
        function _findNode(node) {
            if (value < node.value) {
                _findNode(node.left)
            } else if (value > node.value) {
                _findNode(node.right)
            } else if (value === node.value) {
                return true
            } else {
                return false
            }
        }

        _findNode(this.root)
    }

    findMinNode(node) {
        function _findMin(node) {
            if (!node.left) {
                return node
            } else {
                _findMin(node)
            }
        }

        return _findMin(node)
    }

    findMaxNode(node) {
        if (!node.right) {
            return node
        } else {
            return this.findMaxNode(node)
        }
    }

    remove(value) {
        this.removeNode(this.root, value)
    }

    removeNode(node, value) {
        if (!node) {
            return null
        } else if (value < node.value) {
            return this.removeNode(node.left, value)
        } else if (value > node.value) {
            return this.removeNode(node.right, value)
        } else {
            if (node.right === null && node.left === null) {
                node = null
                return node
            } else if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }
        }
        let aux = this.findMinNode(node.right)
        node.value = aux.value
        node.right = this.removeNode(node.right, aux.value);
        return node
    }

    inOrder() {
        let result = [];

        function _inOrder(node) {
            if (node.left) {
                _inOrder(node.left)
            }
            result.push(node);
            if (node.right) {
                _inOrder(node.right)
            }
        }
        _inOrder(this.root)
        return result
    }

    preOrder(){
        let result = []
    function _preOrder(node) {
        result.push(node)
        if(node.left){
            _preOrder(node)
        }
        if(node.right){
            _preOrder(node)
        }
    }
    _preOrder(this.root)
    return result
    }
    postOrder(){
        let result = []
            function _postOrder(node) {
                if(node.left){
                    _postOrder(node.left)
                }if (node.right){
                    _postOrder(node.right)
                }
                result.push(node);
            }
        return result;
    }
}
