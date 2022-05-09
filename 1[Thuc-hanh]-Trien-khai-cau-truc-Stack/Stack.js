"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.storage = [];
        this.capacity = capacity;
    }
    Stack.prototype.push = function (item) {
        if (this.size() === this.capacity) {
            this.storage.push(item);
        }
    };
    Stack.prototype.pop = function () {
        return this.storage.pop();
    };
    Stack.prototype.size = function () {
        return this.storage.length;
    };
    return Stack;
}());
exports.Stack = Stack;
