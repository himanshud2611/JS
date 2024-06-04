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


//Stack[Primitive], Heap[Non-Primitive]
let myGithubName = "himanshud2611"
let anotherName = myGithubName
anotherName = "hdubey261102"

console.log(myGithubName);
console.log(anotherName);

let userOne = {
    email: "user1@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
