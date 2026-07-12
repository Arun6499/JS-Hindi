const coding =["JavaScript", "Python", "C#", "Java", "Ruby"];

// coding.forEach( function(language) {
//     console.log(language);
// })

// coding.forEach((value)=>{    
//   console.log(value);
// })

// function printLanguage(language){
//     console.log(language);
// }

// coding.forEach(printLanguage);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })  

const myCoding =[
    {
        language: "JavaScript",
        laguageType: "Scripting Language"
    },
     {
        language: "C#",
        laguageType: "Programming Language"
    },
    {
        language: "DS",
        laguageType: "Data Structure"
    }
]

myCoding.forEach((item) => {
    console.log(`Language is ${item.language} and Language Type is ${item.laguageType}`);
})