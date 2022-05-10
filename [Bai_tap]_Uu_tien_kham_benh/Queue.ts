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
      let min = this.storage[0].getCode()
        let minIndex = -1
        this.storage.forEach((item,index)=>{
            if (item.getCode()<min){
                min=item.getCode()
                minIndex=index
            }
        }
        )
        return this.storage.splice(minIndex,1)

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
    }
    size(){
        return this.storage.length
    }
    showList(){
        return this.storage
    }
}