"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var Node_1 = require("./Node");
var Tree = /** @class */ (function () {
    function Tree(value) {
        this.root = new Node_1.Node(value);
        this.count = 0;
    }
    Tree.prototype.insert = function (value) {
        var newNode = new Node_1.Node(value);
        function _insert(node) {
            if (newNode.key < node.key) {
                if (!node.left) {
                    node.left = newNode;
                }
                else {
                    _insert(node.left);
                }
            }
            else if (newNode.key > node.key) {
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    _insert(node.right);
                }
            }
        }
        _insert(this.root);
    };
    Tree.prototype.preOrder = function () {
        var result = [];
        function _preOrder(node) {
            result.push(node);
            if (node.left) {
                _preOrder(node.left);
            }
            if (node.rigt) {
                _preOrder(node.right);
            }
        }
        _preOrder(this.root);
        return result;
    };
    Tree.prototype.postOrder = function () {
        var result = [];
        function _postOrder(node) {
            result.push(node);
            if (node.left) {
                _postOrder(node.left);
            }
            if (node.right) {
                _postOrder(node.right);
            }
        }
        _postOrder(this.root);
        return result;
    };
    Tree.prototype.findCurrent = function (value) {
        function find(node) {
            if (node === null) {
                return null;
            }
            else if (value < node.key) {
                find(node.left);
            }
            if (node.key < value) {
                find(node.right);
            }
            else {
                return true;
            }
        }
        find(this.root);
    };
    return Tree;
}());
exports.Tree = Tree;
