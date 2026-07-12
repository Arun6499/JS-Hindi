// while

let i= 0
while (i <= 10) {
    //console.log(`value of i: ${i}`);
    i=i+2;
}

let myarray = ["apple", "banana", "cherry", "date", "elderberry"];
let j = 0;
while (j < myarray.length) {
    const element = myarray[j];
    //console.log(`value is ${element}`);
    j = j+1;
}

// do while
let score = 6;

do {
    console.log(`score is ${score}`);
    score = score + 1;  
} while (score <= 5);    