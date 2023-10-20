const twoMultiple = [2, 4, 6, 8, 10];
const threeMultiple = [3, 6, 9, 12, 15];

/*
push method in array will push the given element in array.
In below example it will push the array in another array rather than
element.
 */
// twoMultiple.push(threeMultiple);
// twoMultiple.concat(threeMultiple);
// console.log(twoMultiple);

console.log("------- concat method -----------");
/**
 * concat combines two array and then return a new array by combining two.
 */

const twoAndThreeMultiplier = twoMultiple.concat(threeMultiple)
console.log(twoAndThreeMultiplier);

console.log("------- Spread operator -----------");
/**
 * Spread operator (...) is used to merge two or more array into a complete new.
 */

const new2N3multiplier = [...twoMultiple, ...threeMultiple]
console.log(new2N3multiplier);