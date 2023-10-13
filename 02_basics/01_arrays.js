const myArrays = [1, 2, 3, 4, 5, 6];
console.log(myArrays);

const myArrays2 = new Array(1, 2, 3, 4, 5, 6);
console.log(myArrays2);
// both arrays will give us same result

console.log(myArrays2[1]); // to get the element at specific index

// Arrays methods
myArrays.push(7); // this will push the element at the end of the array
console.log(myArrays);
myArrays.pop(); // This will remove the last element from the arrays
console.log(myArrays);

myArrays.unshift(0); // this insert the element at the start of the array by shifting all the element one position in an array
console.log(myArrays);

myArrays.shift();
console.log(myArrays); // This remove the element from the start of the arrays

console.log(myArrays.includes(1)); // To find if element exists in the array or not and return boolean true and false.

const newArray = myArrays.join(); // This convert the arrays to strings
console.log(newArray);

console.log("---------------- SLICE AND SPLICE --------------------");

// Slice and splice

const newSampleArray = [1, 2, 3, 4, 5, 6];
console.log("Original Array", newSampleArray);

/*Slice return the element of an array from the given start and end range in which end range is not included in 
returned item and it do not make any changes in parent arrays.
*/
const sliceArray = newSampleArray.slice(1, 3);
console.log("Slice Array ", sliceArray);
console.log("Original Array after slice", newSampleArray);

/*
Splice return the element from the array with start and end range in which end range is included but 
it also modify the original array on which the splice is executed.
*/
const spliceArray = newSampleArray.splice(1, 3);
console.log("Splice Array ", spliceArray);
console.log("Original Array after splice ", newSampleArray);
