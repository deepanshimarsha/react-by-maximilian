/* copy */
/* numbers, strings, booleans, these are so-called primitive types */
/* whenever you reassign or you store a variable in another variable. It will copy the value */
var number = 1
var num2  = number
number = 2
console.log(num2)

/* objects and arrays are reference types */
/* whenever you copy objects or arrays. It will copy the address of them thus it will be a reference to them */
const person = {
    name:"max"
}

const secondperson = person
person.name = "manu"
console.log(secondperson)


/* Therefore if you want to do this in a real copy way, 
you will have to create a new object and just copy the properties and not the entire object */
const person = {
    name:"max"
}
const secondperson = {
    ...person
}
person.name = "manu"
console.log(secondperson)
