//function declaration
function foo() {
    console.log("Hello foo")
}
foo()

//function expression
var f = function foo2() {
    console.log("Hello foo2")
};
f()

// function is lost if we do this
// f = 10
// f()

// function as arguments

var f = function () {
    console.log("Hello")
}

var executor = function (fn) {
    console.log(fn)
}
executor() //first
executor("Manish") //Second
executor(f) //Third but doesnt print hello world

// to call function f inside function we do fn()
var f = function () {
    console.log("Hello")
};
var executor = function (fn) {
    fn()
}
executor(f) 