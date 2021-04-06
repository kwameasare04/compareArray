const a = [1, 2, 3];
const b = [1, 2, 3];

//console.log(a === b); // false, although a and b have the same values they point to different places in memory so are not identical.

/* Create a function "arraysAreEqual" with two parameters "arrayOne" and "arrayTwo". 

If two arrays are equal (have same quantity of the elements and all elements match e.g. arrayOne[0] === arrayTwo[0] etc.) return "true".

Otherwise return "false". */
const arraysAreEqual = (arrayOne, arrayTwo) =>{
    if(arrayOne.length !== arrayTwo.length)
        return false;
    
    return arrayOne.every((element,index) => element === arrayTwo[index]);
}
    





const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(arraysAreEqual(a, b)); // true
console.log(arraysAreEqual(a, c)); // false
console.log(arraysAreEqual(a, d)); // false
