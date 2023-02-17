// functions on objects
// omg bro this stuff crazy crazy


var myObj = {
    "testProp": true
}

myObj.myMethod = function () {
    console.log("Hello")
}

console.log('myObj: ', myObj);
myObj.myMethod()


// object function that uses objects values onli
var person = {
    "fName": "Shivam",
    "lName": "Sharma",
    "getFullName": function () {
        return person.fName + " " + person.lName
    }
}
var fullName = person.getFullName()
console.log('fullName: ', fullName);

// this is problem with above code
var person2 = person
person = {}
console.log('person2: ', person2.getFullName());

// we fix it by using this keyword

var person = {
    "fName": "Shivam",
    "lName": "Sharma",
    "getFullName": function () {
        return this.fName + " " + this.lName
    }
}
var fullName = person.getFullName()
var person2 = person
person = {}
console.log('person2: ', person2.getFullName());

// more functions :(

var person = {
    "fName": "Manish",
    "lName": "Hurkat",
    getFullName:function(){
    return this.fName + " " + this.lName
    },
    "address": {
        "street": "123 JS Street",
        "city": "JS",
        "state": "CA"
    },
    isFromState:function(state){
        if (this.address.state === state){
            console.log("Yes they are from state CA");
        }
        else{
            console.log("Not from state CA");
        }
    }
}

person.isFromState("Abc")
