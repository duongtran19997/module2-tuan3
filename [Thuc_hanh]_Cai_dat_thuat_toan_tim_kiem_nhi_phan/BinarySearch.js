var BinarySearch = /** @class */ (function () {
    function BinarySearch() {
        this.number = [];
        this.index = 0;
    }
    BinarySearch.prototype.push = function (arr) {
        this.number.push(arr);
    };
    BinarySearch.prototype.find = function (low, high, target) {
        // low = 0
        // high = this.number.length
        if (low <= high) {
            var mid = Math.floor((low + high) / 2);
            if (this.number[mid] == target) {
                this.index = mid;
                this.find(low, mid - 1, target); // 1
            }
            else if (target > this.number[mid]) {
                return this.find(mid + 1, high, target);
            }
            else {
                return this.find(low, mid - 1, target);
            }
        }
        return this.index;
    };
    return BinarySearch;
}());
var binary = new BinarySearch();
binary.push(1);
binary.push(32);
binary.push(32);
binary.push(32);
binary.push(32);
binary.push(34);
binary.push(34);
binary.push(34);
binary.push(39);
//lưu ý không để trùng số giữa
console.log(binary.find(0, 8, 32));
