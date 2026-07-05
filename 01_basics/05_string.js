const name = "arun"
const repoCount = 50

//console.log(name + repoCount+ "welcome");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('arun-ludo-tournament')
//console.log(typeof gameName);

// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(7));
// console.log(gameName.indexOf('u'))

const newstring = gameName.substring(0, 4)
console.log(newstring);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "  ayuyuyg "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://arun.com/arun%20patil"
console.log(url.replace('%20','-'))

console.log(url.includes('arun'));

console.log(gameName.split('-'));












