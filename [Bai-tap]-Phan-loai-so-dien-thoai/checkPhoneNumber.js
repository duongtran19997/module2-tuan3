function checkPhoneNumber(arr, com1, com2, com3) {
    var mobiPhone = [];
    var viettel = [];
    var vinaPhone = [];
    for (var i = 0; i < arr.length; i++) {
        var result = arr[i].substring(0, 3);
        if (result === com1) {
            mobiPhone.push(arr[i]);
        }
        else if (result === com2) {
            viettel.push(arr[i]);
        }
        else if (result === com3) {
            vinaPhone.push(arr[i]);
        }
    }
    return "mobiphone gom cac so".concat(mobiPhone, ", vinaphone gom ").concat(vinaPhone, ", vietel g\u1ED3m ").concat(viettel);
}
var array = ['0984838740', '0851323229', '0791392391', '098999999'];
var viettel = '098';
var vinaphone = '085';
var mobiphone = '079';
console.log(checkPhoneNumber(array, mobiphone, viettel, vinaphone));
