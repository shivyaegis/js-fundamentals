// let, const, destructuring, spread, rest

// let has block scope
// const once declared cant be reassigned

var name1 = "Shivam"
const dept = "initial"
// dept = "exec" will give error
console.log('name1: ', name1);
console.log('dept: ', dept);


// destructuring

let a, b, rest;
[a, b] = [10, 20];
console.log('a: ', a);
console.log('b: ', b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log('rest: ', rest);

var one = ["foo", "bar", "baz"]
var foo = one[0]
var bar = one[1]
var baz = one[2]

// using destructuring we can do
var [foo, bar, baz] = one
console.log(foo, bar, baz)

// spread

function f(one, two, three) {
    console.log('one: ', one);
    console.log('two: ', two);
    console.log('three: ', three);


}
var arr = [0, 1, 2]
// sends array as one 
f(arr)
// send spread array as one two three
f(...arr)


// rest parameter is opposite of 
// spread synatax (clubs elements in one array)

function myFunc(arg1, arg2, ...rest) {
    console.log('rest: ', rest);
}
myFunc(1, 2, 3, 4, 5, 6, 7)
// no rest elements
myFunc(1, 2)

let sum = function (...args) {
    console.log('args: ', args);
}
console.log(sum(2, 3, 4, 5))