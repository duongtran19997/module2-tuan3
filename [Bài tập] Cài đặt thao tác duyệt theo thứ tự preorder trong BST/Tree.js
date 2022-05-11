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
    return Tree;
}());
exports.Tree = Tree;
