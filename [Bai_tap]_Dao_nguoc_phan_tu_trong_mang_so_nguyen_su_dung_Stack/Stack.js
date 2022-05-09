"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.storage = [];
    }
    Stack.prototype.push = function (item) {
        return this.storage.push(item);
    };
    Stack.prototype.pop = function () {
        return this.storage.pop();
    };
    Stack.prototype.size = function () {
        this.storage.length;
    };
    return Stack;
}());
exports.Stack = Stack;
var array = [1, 2, 5, 'chim', 4, 'ga'];
var stack = new Stack();
for (var i = 0; i < array.length; i++) {
    stack.push(array[i]);
}
console.log(stack);
console.log(array);
for (var i = 0; i < 6; i++) {
    array[i] = stack.pop();
}
console.log(array);
