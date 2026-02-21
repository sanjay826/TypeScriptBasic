// Ternary Operator /Conditional Operator
// ? :
// expression ? valueIfTrue : valueIfFalse
//Example 1 :

let a: number = 100, b: number = 200;
let res :number =(a>b) ? a : b;
console.log(`The Greater Value is : ${res}`); // The Greater Value is : 200

//Example 2 :
/* let age: number = 30;
let result : string = (age >=18) ? "Yes, You are eligible to vote." : "No, You are not eligible to vote.";
console.log(result); // Yes, You are eligible to vote.
//Example 3 :
let num: number = 15;
let parity: string = (num % 2 == 0) ? "Even" : "Odd";
console.log(`The number ${num} is ${parity}.`); // The number 15 is Odd. */

let marks : number | null = null;
console.log(typeof(marks));