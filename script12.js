// array and its methods

var myArray = [10, 20, "Shivam", { "one": "something" }]
console.log('myArray: ', myArray);

// push 
myArray.push(10)
console.log('myArray: ', myArray);

// pops last element
myArray.pop()
console.log('myArray: ', myArray);

// unshifts by adding element to left
myArray.unshift("abc")
console.log('myArray: ', myArray);

// shifts to left
myArray.shift()
console.log('myArray: ', myArray);

// forEach method in array
var myFunction = function (item) {
    console.log("Element: "+ item)
}
myArray.forEach(myFunction)