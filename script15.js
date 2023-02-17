// arrow functions

var fn = () => 'Hello World'
// equivalent of
var fn = function () { return 'Hello World' }
console.log('fn: ', fn());



var things = [1, 2, 3, 4, 5]
things.map(function (thing) {/*console.log(thing)*/})
// equivalent of
var things = [1, 2, 3, 4, 5]
things.map((thing) => {console.log(thing)})
