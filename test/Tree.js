"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var Node_1 = require("./Node");
var Tree = /** @class */ (function () {
    function Tree(value) {
        this.root = new Node_1.Node(value);
        this.count = 1;
    }
    Tree.prototype.insert = function (data) {
        var newNode = new Node_1.Node(data);
        function searchInsert(node) {
            if (newNode.value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                }
                else {
                    searchInsert(node.left);
                }
            }
            else if (newNode.value > node.value) {
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    searchInsert(node.right);
                }
            }
        }
        searchInsert(this.root);
        this.count++;
    };
    Tree.prototype.inOrder = function () {
        var result = [];
        function _inOrder(node) {
            if (node.left) {
                _inOrder(node.left);
            }
            result.push(node.value);
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
            result.push(node.value);
            if (node.left) {
                _preOrder(node.left);
            }
            if (node.right) {
                _preOrder(node.right);
            }
        }
        _preOrder(this.root);
        return result;
    };
    Tree.prototype.findMinNode = function () {
        var _findMinNode = function (node) {
            if (node.left === null) {
                return node;
            }
            else {
                _findMinNode(node.left);
            }
        };
        return _findMinNode(this.root);
    };
    Tree.prototype.findMaxNode = function () {
        var _findMaxNode = function (node) {
            if (node.right === null) {
                return node;
            }
            else {
                _findMaxNode(node.right);
            }
        };
        return _findMaxNode(this.root);
    };
    return Tree;
}());
exports.Tree = Tree;
var newTree = new Tree(40);
newTree.insert(30);
newTree.insert(45);
newTree.insert(22);
newTree.insert(23);
console.log(newTree.inOrder());
