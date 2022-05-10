"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Patient_1 = require("./Patient");
var Queue = /** @class */ (function () {
    function Queue() {
        this.storage = [];
    }
    Queue.prototype.enqueue = function (name, code) {
        var patient = new Patient_1.Patient(name, code);
        return this.storage.push(patient);
    };
    Queue.prototype.dequeue = function () {
        var min = this.storage[0].getCode();
        var minIndex = -1;
        this.storage.forEach(function (item, index) {
            if (item.getCode() < min) {
                min = item.getCode();
                minIndex = index;
            }
        });
        return this.storage.splice(minIndex, 1);
        // let min = this.storage[0].getCode()
        // for (let i = 0; i < this.size(); i++) {
        //     if(min>this.storage[i].getCode()){
        //         min=this.storage[i].getCode()
        //     }
        // }
        // for (let i = 0; i < this.size(); i++) {
        //     if(this.storage[i].getCode()===min){
        //         return this.storage.splice(i,1)
        //     }
        // }
    };
    Queue.prototype.size = function () {
        return this.storage.length;
    };
    Queue.prototype.showList = function () {
        return this.storage;
    };
    return Queue;
}());
exports.Queue = Queue;
