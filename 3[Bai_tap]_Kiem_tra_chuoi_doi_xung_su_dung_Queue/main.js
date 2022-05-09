"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
function checkSymmetry(a) {
    var count = 0;
    var flag = true;
    var stack = new Stack_1.Stack(100, a);
    var queue = new Queue_1.Queue(a);
    while (count < stack.size()) {
        var stackCheck = stack.pop();
        var queueCheck = queue.dequeue();
        if (stackCheck !== queueCheck) {
            flag = false;
            break;
        }
        count++;
    }
    if (flag === true) {
        console.log('chuỗi đối xứng');
    }
    else {
        console.log('chuỗi không đối xứng');
    }
}
checkSymmetry('able was I ere I saw elba');
