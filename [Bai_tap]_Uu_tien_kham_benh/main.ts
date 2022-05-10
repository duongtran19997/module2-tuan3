import {Patient} from "./Patient";
import {Queue} from "./Queue";
let hospital =  new Queue()
hospital.enqueue('smith',5)
hospital.enqueue('Jones',4)
hospital.enqueue('Fenehbace',6)
hospital.enqueue('Wes Brown',1)
hospital.enqueue('Instagram',1)
hospital.enqueue('facebook',2)
console.log(hospital.showList());
console.log(hospital.dequeue());
console.log(hospital.dequeue());
console.log(hospital.dequeue());
console.log(hospital.dequeue());