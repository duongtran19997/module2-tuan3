"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.bubbleSort = function (list) {
        var _a;
        var needNextPass = true;
        for (var i = 1; i < list.length && needNextPass; i++) {
            needNextPass = false;
            for (var j = 0; j < list.length - i; j++) {
                if (list[j] > list[j + 1]) {
                    _a = [list[j + 1], list[j]], list[j] = _a[0], list[j + 1] = _a[1];
                    // let temp:number = list[j]
                    // list[j]=list[j+1]
                    // list[j+1] = temp
                    needNextPass = true;
                }
            }
        }
    };
    BubbleSort.list = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
BubbleSort.bubbleSort(BubbleSort.list);
for (var i = 0; i < BubbleSort.list.length; i++)
    console.log(BubbleSort.list[i] + " ");
