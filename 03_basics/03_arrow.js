const user = {
    name: "arun",
    age: 45,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.name="ram"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "arun"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "arun"
//     console.log(this.username);
// }

const chai = () => {
    let username = "arun"
    console.log(this);
}

//chai()

// const addTwo =(num1,num2) => {
//     return num1 + num2
// }

// const addTwo =(num1,num2) => num1 + num2

// const addTwo =(num1,num2) => (num1 + num2)

const addTwo =(num1,num2) => ({username:"Arun"})

// console.log(addTwo(3,4));

const myArray = [2,5,6,7,4]
