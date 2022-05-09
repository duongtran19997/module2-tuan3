import {Patient} from "./Patient";
export class Queue {
    private storage = [];
    constructor() {
    }
    enqueue(name:string,code:number){
        let patient = new Patient(name,code)


        return  this.storage.push(patient);
    }
    dequeue() {
        // let newArr: number[] = []
        // for (const argument of this.storage) {
        //     newArr.push(argument.getCode());
        // }
        //
        //  newArr.sort(function (a,b) {
        //     return b -a
        // })
        //
        //
        // return newArr.pop()
        let min = this.storage[0].getCode()
        for (let i = 0; i < this.size(); i++) {
            if(min>this.storage[i].getCode()){
                min=this.storage[i].getCode()
            }
        }
        for (let i = 0; i < this.size(); i++) {
            if(this.storage[i].getCode()===min){
                return this.storage.splice(i,1)
            }
        }
    }
    size(){
        return this.storage.length
    }
    showList(){
        return this.storage
    }
}