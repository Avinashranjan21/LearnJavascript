
console.log("*************************** Type Conversion ****************************");
let score = 50
console.log("The type of score is " + typeof score);

let valueInNumber = Number(score)
console.log("Converted value is " + valueInNumber);
score = "50aa"
valueInNumber = Number(score)
console.log("The value of invalid number is " + valueInNumber);
//NaN means "Not a number" in JS

score = null
valueInNumber = Number(score)
console.log("The value of null number is " + valueInNumber);
// This will give 0

let isScoreLoaded = 1
let booleanConvert = Boolean(isScoreLoaded)
console.log("The value of boolean convert is " + booleanConvert);

console.log("*************************** Operations ****************************");

let value = 3
let negativeValue = -value
console.log("The value is " + negativeValue);

console.log("1" + 2)
console.log(1 + "2" + 3)
console.log(1 + 2 + "3")
