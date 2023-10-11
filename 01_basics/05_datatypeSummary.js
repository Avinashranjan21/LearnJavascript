/* 
Javascript is dynamically typed language.

#1 Primitive -> They are call by value and of 7 types which is mentioned below
String, Number,Boolean, null, undefined, Symbol, BigInt

#2: Reference (Non-Primitive) 
Arrays, Objects, Functions
*/


// Stack and Heaps

// All the primitive data type value is kept at stack and non primitive is stored in heaps.
// Primitive is call by value means when another primitive is refered to this then value is sent not the reference

let myname = "Avinash Pandey"
let myAnotherName = "Avinash Ranjan"

console.log("myname value is " + myname);
console.log("myAnotherName value is " + myAnotherName);
myname = "Little baua"
console.log("myname value is " + myname);
console.log("myAnotherName value is " + myAnotherName);


let userOne = {
    name : "Avinash Ranjan",
    age : 30
}

let userTwo = userOne

console.log("The usertwo name is " + userTwo.name);
userOne.name = "Avinash Pandey"
// As this is stored in heaps so the reference is transferred.
console.log("The usertwo name is " + userTwo.name);
