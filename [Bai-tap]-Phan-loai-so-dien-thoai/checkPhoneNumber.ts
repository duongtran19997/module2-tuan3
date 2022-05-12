function checkPhoneNumber(arr:string[],com1:string,com2:string,com3:string){
    let mobiPhone = []
    let viettel = []
    let vinaPhone = []

    for(let i = 0;i<arr.length;i++){
        let result = arr[i].substring(0,3)
        if(result===com1){
            mobiPhone.push(arr[i])
        }else if(result===com2){
            viettel.push(arr[i])
        }else if(result===com3){
            vinaPhone.push(arr[i])
        }
    }
    return `mobiphone gom cac so${mobiPhone}, vinaphone gom ${vinaPhone}, vietel gồm ${viettel}`

}
let array:string[]=['0984838740','0851323229','0791392391','098999999']
let viettel:string='098'
let vinaphone:string='085'
let mobiphone:string='079'
console.log(checkPhoneNumber(array, mobiphone, viettel, vinaphone));