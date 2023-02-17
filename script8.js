// functions in js

function sayHello1() {
    console.log("Hello")
}
sayHello1()


function sayHello2(name){
    console.log("Hello " + name)
}
sayHello2("Shivam")


function sayHello3(name,id){
    console.log("Hello " + name + " ID " + id);
}
sayHello3("Shivam",12)
// no id given here, will print undefined
sayHello3("Shivam")
// extra argument given, no error
sayHello3("Shivam", 12, 6969)


// return value
function sayHello4(name){
    return "Hello " + name
}

var temp = sayHello4("Shivam")
console.log('temp: ', temp)

// no return value specified will give undefined
function sayHello5(name){
    return
}
var temp = sayHello5("Shivam")
console.log('temp: ', temp)