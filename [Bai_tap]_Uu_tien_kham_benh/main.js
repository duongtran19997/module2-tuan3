"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./Queue");
var hospital = new Queue_1.Queue();
hospital.enqueue('smith', 5);
hospital.enqueue('Jones', 4);
hospital.enqueue('Fenehbace', 6);
hospital.enqueue('Wes Brown', 1);
hospital.enqueue('Instagram', 1);
hospital.enqueue('facebook', 2);
console.log(hospital.showList());
console.log(hospital.dequeue());
console.log(hospital.dequeue());
console.log(hospital.dequeue());
console.log(hospital.dequeue());