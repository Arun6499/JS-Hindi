const myObject = {
    js:'javascript',
    c:'cprogram',
    py:'python'
};

for(const key in myObject){
   // console.log(`${key} is ${myObject[key]}`);
}

const Pgm= ["javascript", "cprogram", "python"];
for(const index in Pgm){
    console.log(`index is ${index} and value is ${Pgm[index]}`);
}