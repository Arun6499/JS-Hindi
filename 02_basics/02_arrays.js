const marvel_heros =["thor","ironman","spiderman"]
const dc_heros = ["superman", "flash"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allNewHeros = [...marvel_heros,...dc_heros]
//console.log(allNewHeros); //Spread operator

// const allNew2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const realUsablearray = allNew2.flat(Infinity)
// console.log(realUsablearray);


// console.log(Array.isArray("Arun"))
// console.log(Array.from("Arun"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
