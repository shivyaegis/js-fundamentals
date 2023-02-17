// function arguments


var add = function (a, b) {
    console.log('arguments: ', arguments);
    return a + b;
};

console.log('add(10, 20): ', add(10, 20));
// this doesnt work
console.log('add(10, 20, 1, 2, 3): ', add(10, 20, 1, 2, 3));


// adding dynamically 
var add = function (a, b) {
    var i, sum = 0
    console.log(typeof(arguments));
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}

console.log('add(10, 20, 1, 2, 3): ', add(10, 20, 1, 2, 3));