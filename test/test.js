var fun; // Notice use of `let` and explicit type annotation
var runTask = function () { return Math.random(); };
try {
    fun = runTask();
    console.log('Try Block Executed');
    throw new Error("Done");
}
catch (e) {
    console.log("Error", e);
}
finally {
    console.log("The Code is finished executing.");
}
