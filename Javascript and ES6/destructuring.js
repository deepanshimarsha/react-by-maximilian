/* easily extract array elements or object properties and store them in variables */

/* array destructuring */

[a,b] = ["max","deepee"]
console.log(a)
console.log(b)


const numbers = [1,2,3,4]
[num1, ,num3] = numbers
console.log(num1)
console.log(num3)

/* object destructuring */
{name} = {name: "max", age : "28"}
console.log(name)