"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var Node_1 = require("./Node");
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
        this.count = 0;
    }
    Tree.prototype.insert = function (data) {
        var newNode = new Node_1.Node(data);
        this.count++;
        var _insert = function (node) {
            if (newNode.data < node.data) {
                if (!node.left) {
                    return node.left = newNode;
                }
                else {
                    _insert(node.left);
                }
            }
            else if (newNode.data > node.data) {
                if (!node.right) {
                    return node.right = newNode;
                }
                else {
                    _insert(node.right);
                }
            }
        };
        _insert(this.root);
    };
    Tree.prototype.findNode = function (value) {
        function _findNode(node) {
            if (value < node.value) {
                _findNode(node.left);
            }
            else if (value > node.value) {
                _findNode(node.right);
            }
            else if (value === node.value) {
                return true;
            }
            else {
                return false;
            }
        }
        _findNode(this.root);
    };
    Tree.prototype.findMinNode = function (node) {
        function _findMin(node) {
            if (!node.left) {
                return node;
            }
            else {
                _findMin(node);
            }
        }
        return _findMin(node);
    };
    Tree.prototype.findMaxNode = function (node) {
        if (!node.right) {
            return node;
        }
        else {
            return this.findMaxNode(node);
        }
    };
    Tree.prototype.remove = function (value) {
        this.removeNode(this.root, value);
    };
    Tree.prototype.removeNode = function (node, value) {
        if (!node) {
            return null;
        }
        else if (value < node.value) {
            return this.removeNode(node.left, value);
        }
        else if (value > node.value) {
            return this.removeNode(node.right, value);
        }
        else {
            if (node.right === null && node.left === null) {
                node = null;
                return node;
            }
            else if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
        }
        var aux = this.findMinNode(node.right);
        node.value = aux.value;
        node.right = this.removeNode(node.right, aux.value);
        return node;
    };
    Tree.prototype.inOrder = function () {
        var result = [];
        function _inOrder(node) {
            if (node.left) {
                _inOrder(node.left);
            }
            result.push(node);
            if (node.right) {
                _inOrder(node.right);
            }
        }
        _inOrder(this.root);
        return result;
    };
    Tree.prototype.preOrder = function () {
        var result = [];
        function _preOrder(node) {
            result.push(node);
            if (node.left) {
                _preOrder(node);
            }
            if (node.right) {
                _preOrder(node);
            }
        }
        _preOrder(this.root);
        return result;
    };
    Tree.prototype.postOrder = function () {
        var result = [];
        function _postOrder(node) {
            if (node.left) {
                _postOrder(node.left);
            }
            if (node.right) {
                _postOrder(node.right);
            }
            result.push(node);
        }
        return result;
    };
    return Tree;
}());
exports.Tree = Tree;
