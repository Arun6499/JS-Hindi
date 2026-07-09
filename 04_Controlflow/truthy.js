const userEmail = []

// if (userEmail) {
//   console.log("Got User Email");
// } else {
//   console.log("Dont have user email");
// }

//falsy values
// false, 0, "", null, undefined, NaN, BigInt(0n)

//truthy values
// true, 1, "string", [], {}, BigInt(1n), 'false', '0', 'null', 'undefined', 'NaN', function() {}

// if(userEmail.length === 0) {
//     console.log("user email is empty");
// }

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// }

// Nullish coalescing operator (??) - returns the right-hand operand when the left-hand operand is null or undefined, otherwise returns the left-hand operand.

let val1;
//val1 = 5 ?? 10; // val1 will be 5 because it's not null or undefined
//val1 = null ?? 10; // val1 will be 10 because the left-hand operand is null
//val1 = undefined ?? 10; // val1 will be 10 because the left-hand operand is undefined
val1 = null ?? undefined ?? 10; // val1 will be 10 because both left-hand operands are null and undefined

console.log(val1); 

// Terniary operator (condition ? exprIfTrue : exprIfFalse) - returns one of two values based on a condition.

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice < 50 ? console.log("Ice Tea is cheap") : console.log("Ice Tea is expensive");