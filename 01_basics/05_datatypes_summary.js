// Primitive
//7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
const outsideTemp = null
const bigNumber = 434342343534534234324n

//Non-Primitive [Reference]
// Arrays, Objects, Functions
const colleges = ["IIT","IISc", "IIIT"]
let myObj = {
    name : "Himanshu",
    age : 22
}

const myFunction = function(){
    console.log("Hello people");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof outsideTemp); // type of NULL is Object
console.log(typeof myObj);
