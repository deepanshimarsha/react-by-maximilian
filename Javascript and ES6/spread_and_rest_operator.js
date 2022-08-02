/* spread operator ... */
/* used to split up array elements or object properties */
const numbers = [1,2,3,4]
const newNumbers = [...numbers,5,6,7]
console.log(newNumbers)

/* rest operator ... */
/* used to merge a list of function arguments into an array */
const myFunc = (...args) => {
    return args.filter(el => el === 1)
}

console.log(myFunc(1,2,3))