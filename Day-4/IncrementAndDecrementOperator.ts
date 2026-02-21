// increment Operator (++)
// Decrement Operator (--)

let x=10;
/* console.log("Initial value of x: " + x); //10
x++; // Prefix Increment
console.log("After Postfix Increment x++ : " + x);  *///11

/* ++x; // Prefix Increment
console.log("After Prefix Increment ++x : " + x); //12 */

// PostIncrement
/* let res: number =x++;
console.log(res);
console.log(x); */

// PreIncrement
let res: number =++x;
console.log(res);
console.log(x);

// Decrement Operator

 console.log("Initial value of x: " + x); //10
x--;    // Postfix Decrement
console.log("After Postfix Decrement x-- : " + x);  //9

--x; // Prefix Decrement
console.log("After Prefix Decrement --x : " + x); //8       
// PostDecrement
let res1: number =x--;
console.log(res1);
console.log(x);     
// PreDecrement
let res2: number =--x;
console.log(res2);
console.log(x);

// Output Explanation
 /* Initial value of x: 10
After Postfix Increment x++ : 11     */