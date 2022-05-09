"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(capacity, storage) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
        this.storage = storage.split('');
    }
    Stack.prototype.push = function (item) {
        if (this.size() === this.capacity) {
            throw Error('khong them duoc');
        }
        else {
            return this.storage.push(item);
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
