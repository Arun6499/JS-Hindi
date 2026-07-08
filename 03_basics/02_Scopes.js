var c = 300
let a = 345
if(true){
let a = 10
const b = 20
 c = 30
 //console.log("Inner: ",a);
 
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const name = "arun"

    function two(){
        const website = "github"
        //console.log(name);        
    }
    //console.log(website);
    two()
}
one()


if(true){
    const username = "arun"
    if(username === "arun")
    {
        const website = " git"
        // console.log(username + website);
        
    }
   // console.log(website);    
}
//console.log(username);

// ++++++++++++++ Interesting ++++++++++++//


console.log(addone(5))

function addone(num) {
    return num + 1
}

//addTwo(5)
const addTwo = function(num){
    return num + 2
}

