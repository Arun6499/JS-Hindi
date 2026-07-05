// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol,
// BigInt

const score = 100
const scroreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
//console.log(id === anotherId);

const bigNumber = 343545456456566n 



// Reference or Non-Primitive

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myobj = {
    name:"Arun",
    age:26
}
const myFunction = function(){
    console.log("Hello World");
    
}

// console.log(typeof outsideTemp); // object

// console.log(typeof isLoggedIn);  // boolean

// console.log(typeof myobj); // object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive), Heap (Non-Primitive)
let myGamename = "Ludo"
let anothername= myGamename;

anothername = "chaiorcode"
console.log(anothername);
console.log(myGamename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email="user@yahoo.com"
console.log(userOne.email);
console.log(userTwo.email);

