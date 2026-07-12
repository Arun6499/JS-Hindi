// for of

let arr = [1, 2, 3, 4, 5];

for (const element of arr) {
    //console.log(element);
}

const greeting = "Hello, World!";
for (const greet of greeting) {
    //console.log(greet);
}

// Maps

const myMap = new Map();
myMap.set('IND', 'India');
myMap.set('USA', 'United States of America');

//console.log(myMap);

for (const [key, value] of myMap) {
    //console.log(`key is ${key} and value is ${value}`);
}

const myObject = {
    game1 : 'cricket',
    game2 : 'football'
};

