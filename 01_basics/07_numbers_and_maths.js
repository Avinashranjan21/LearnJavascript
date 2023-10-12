const score = 400 // This is returned from stack and primitive value
console.log(score);
const balance = new Number(100) // This return number as object
console.log(balance);
console.log(balance.toString()); // This is converted to strings
console.log(balance.toFixed(1)); // This is used for precision value

const otherNumber = 245.456

console.log(otherNumber.toPrecision(4)); // this return the number to the given precision length and round post decimal number

const hundered = 1000000
console.log(hundered.toLocaleString()); // print 1,000,000
console.log(hundered.toLocaleString('en-IN')); // print 10,00,000

// --------------------------- Maths -----------------------------
console.log("---------------- Math-------------------------");
console.log(Math)
console.log(Math.abs(-5)) // return the face value of the number
console.log(Math.round(4.3)) // return round off number
console.log(Math.ceil(4.3)) // return round off number to upper side result is 5
console.log(Math.floor(4.3)) // return round off number to lower side result is 4

console.log(Math.random()); // this always return value ranging between 0 to 1

