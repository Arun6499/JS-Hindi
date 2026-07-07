// singleton 
// object.create
// object literals
const mySym = Symbol("key1")

const JsUser ={
    name: "arun",
    age: 18,
    "full name": "Arun Patil",
    [mySym]: "mykey1",
    location: "Kolhapur",
    email: "arun@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "arun@yahoo.com"
//Object.freeze(JsUser)
JsUser.email = "arun@microsoft.com"
//console.log(JsUser);

JsUser.greetings = function(){
    console.log("hello JS user");    
}
JsUser.greetingsTwo = function(){
    console.log(`hello JS user, ${this.name}`);    
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());