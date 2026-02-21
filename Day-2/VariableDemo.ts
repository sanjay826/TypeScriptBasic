console.log("Hello, welcome to TypeScript!");



/* onsole.log("Hello, welcome to TypeScript!");
console.log("Hello, welcome to TypeScript!");
console.log("Hello, welcome to TypeScript!"); */

// 

// var age =30;
// console.log("Age is: " + age);

// var vs let vs const

/* function varScope()
{
    if (true)
    {
         var varVariable = "I am a var variable";
         console.log(varVariable); // Accessible here
    }
    console.log(varVariable); // Accessible here as well
}

varScope();

function letScope()
{
    if(true)
    {
        let letVariable = "I am a let variable";
        console.log(letVariable); // Accessible here
    }
   // console.log(letVariable); // Error: letVariable is not defined
}

letScope();

function constDemo()
{
    if(true)
    {
        const constVariable = "I am a const variable";
        console.log(constVariable); // Accessible here
    }
    
}   

constDemo(); */

// 2. Declaration / Value Assignment
//Example : var can be declared without value assignment
/* var x; // Declaration
console.log("Value of x:", x); // Output: undefinedy
x=10; // Value Assignment
console.log("Value of x after assignment:", x); // Output: 10
 */
//Example : let can be declared without value assignment
/* let y; // Declaration
console.log("Value of y:", y); // Output: undefined
y=20; // Value Assignment
console.log("Value of y after assignment:", y); // Output: 20 */

// Example : const must be declared with value assignment
// const z=10; 
// console.log("Value of z:", z); // This will cause an error

//3. Re-Declaration

//  A) . var -allow the redeclaration
/* var city = "New York";
var city = "Los Angeles"; // Redeclaration
console.log("City:", city); // Output: Los Angeles */


// Example : let - does not allow redeclaration

//let contry = "USA";
//let contry = "Canada"; // Error: Cannot redeclare block-scoped variable 'contry'
//console.log("Country:", contry); // Output: USA

// 4.Re-initialization / Re-assignment

// A) . var and let - allow re-assignment
// B) . const - Re-assignment is not allowed (Only contrants allowed - cnannot change the value))

//Example : 1
/* var age = 25;
age = 30; // Re-assignment
console.log("Age:", age); // Output: 30 */

// Example : 2
/* let age = 25;
age = 30; // Re-assignment
console.log("Age:", age); // Output: 30 */

// Example : 3
/* const num =25;
num=30; */

//5.   Hoisting  (var is hoisted, let and const are not hoisted)
/* console.log(a);
var a = 10; */

//Example : 2
/* console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;
 */
// Example : 3
/* console.log(c); // Error: Cannot access 'c' before initialization
const c = 30; */



