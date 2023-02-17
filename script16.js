// callback

var a = 10;
var fn = function () {
    console.log(a);
}
// even tho function runs it times out for 1000 
// and output will come later
setTimeout(fn, 1000);
console.log("Done")