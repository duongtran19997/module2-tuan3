// try {
//     eval(alert('ES6 Exception Handling'));
// } catch(e){
//     console.log("Error : " + e.name)
// }
// try{
//     ab();
//     // We have not declared the
//     // function ab anywhere
// } catch(e){
//     console.log("Error : "+ e.name);
// }
var num = 5;
var de_num = 5;
try {
    if(de_num == 0) {
        throw "Divide by zero error";
    } else {
        console.log( num / de_num);
    }
} catch(e) {
    console.log("Error : " + e);
}