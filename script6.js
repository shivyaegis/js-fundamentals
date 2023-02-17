var obj={"prop":"Hello","prop2":123}

console.log('obj: ', obj);
// this is known as dot notation
console.log('obj.prop2: ', obj.prop2);
// undefined since doesnt exist
console.log('obj.prop3: ', obj.prop3);

// this is known as [] notation
console.log('obj["prop2"]: ', obj["prop2"]);
    
// passing variable as string for object element
var propName="prop"
console.log('obj[propName]: ', obj[propName]);
    
// Nested Object
var obj={"prop":"Hello","prop2":123,"jsdemo":{"one":"Shivam"}}

console.log('obj.jsdemo: ', obj.jsdemo);
console.log('obj.jsdemo.one: ', obj.jsdemo.one);
console.log('obj.jsdemo["one"]: ', obj.jsdemo["one"]);

// adding element to nested object
obj.jsdemo.two="Hello World"
console.log('obj: ', obj);
    
// deleting element

person={"fname":"Shivam","mname":null,"lname":"Sharma"}
console.log('person: ', person);

// If you write (to delete mname)

person.mname=undefined
// and then console.log(person) will still show the property
console.log('person: ', person);

// to actually remove we do
delete person.mname
console.log('person: ', person);