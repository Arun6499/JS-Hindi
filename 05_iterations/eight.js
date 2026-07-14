// reduce

const myNum = [2,3,4,5,6]

const intialValue = 0

// const sum = myNum.reduce((accumulator, currentValue) => 
//     (accumulator + currentValue), intialValue)

// const sum =myNum.reduce(function (acc,currval){
//     console.log(`accumulator: ${acc} currentValue: ${currval}`)
//     return acc + currval
// },0)

//console.log(sum);

const shoppingcart =[{id:1,name:"phone",price:5000},
    {id:2,name:"laptop",price:10000},
    {id:3,name:"tv",price:15000},
    {id:4,name:"fridge",price:20000},
    {id:5,name:"ac",price:25000}
]

const totalCost = shoppingcart.reduce((acc,item) => acc + item.price,0)

console.log(totalCost);