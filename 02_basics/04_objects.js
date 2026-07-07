//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "12abg"
tinderUser.name = "gimmy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "gimmy@gmail.com",
    fullname: {
        userfullname :{
            firstname: "arun",
            lastname: "patil"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = { 1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 ={obj1,obj2}
//const obj3 = Object.assign({},obj1, obj2,obj4)

const obj3 ={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 2,
        email : "rbc@gmail.com"
    },
    {
        id : 3,
        email : "atc@gmail.com"
    },
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));