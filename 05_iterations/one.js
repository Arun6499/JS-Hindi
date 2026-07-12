// for loop - used to iterate over a block of code a specified number of times
// Syntax: for (initialization; condition; increment/decrement) { code block }

// Example: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  const element = i;
  if(element == 5){
    //console.log("This is the last iteration");
  }

  //console.log(i);
}

for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop value: ${j} and inner loop value: ${i}`);
  //console.log(i + '*' + j + '=' + (i * j));
    }
}

let myArray = ["apple", "banana", "cherry", "date", "elderberry"];
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //console.log(element);
}

// break and Continue

for (let i = 1; i <= 20; i++) {
    if(i == 5) {
        //console.log(`Detected 5`);
        break;
    }
    //console.log(`value of i: ${i}`);
    
}

for (let i = 1; i <= 20; i++) {
    if(i == 5) {
        //console.log(`Detected 5`);
        continue
    }
    //console.log(`value of i: ${i}`);
    
}

