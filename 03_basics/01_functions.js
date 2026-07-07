function sayMyname(){
    console.log("A");
    console.log("R");
    console.log("U");
    console.log("N");
}

// sayMyname()

// function addTwoNum(num1,num2){   
//    console.log(num1 + num2);   
// }

function addTwoNum(num1,num2){ 
    // let result = num1 + num2;
    // return result;   
    return num1 + num2;      
}

const result = addTwoNum(3,9)
//console.log("Result: ",result);

function loginUserMessage(username="ram"){
    if(!username){
        console.log("Please Enter User Name");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("arun"))
//console.log(loginUserMessage())

function calculateCartPrice(va1,val2,...num1){
  return num1
}

//console.log(calculateCartPrice(123,456,789));

const user = {
    username: "arun",
    price: 2334
}

function hadleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// hadleObject(user)
hadleObject({
     username: "arun",
    price: 2334
})

const myNewArray = [234,567,345,754]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([234,567,345,754]));
