/* javascript */
class Person{
    constructor(){
        this.name = "max"
    }
    myfunc = () =>{
        console.log(this.name)
    }
}

const obj = new Person()
obj.myfunc()
console.log(obj.name)

/*ES6 OR ES7 */

class Human{
    name = "Max"

    myfunc = () =>{
        console.log(this.name)
    }
}
const obj = new Human()
obj.myfunc()
console.log(obj.name)
