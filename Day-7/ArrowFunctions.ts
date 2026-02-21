// Arrow Functions / Lamda functions 

/* Lamda refers to anonymous functions in programming.
   Lamda Functions are a concise (way to write functions in TypeScript.) mechanism to represent anonymous functions.
   Thses functions are also known as Arrow Functions because they use the "=>" syntax.

   Thare are 3 parts to a Lamda function:
    1. Parameters - A function may optionally have parameters.
    2. The fat notation / Lambda Notation(=>) -it is also called as the "goes to operator".
    3. Statement - represents the function body which contains the logic to be executed.
    
    Syntax: 
        let variable = (parameters) => {
            // block of code
        }
            variable(arguments); // calling the function
*/

// Example 1: Arrow function without parameters and without return type
  /* let greet = (): void =>
   {
    console.log("Hello, welcome to TypeScript!");
   };

   greet(); // calling the function */

// Example 2: Arrow function with parameters and return type
   /* let multiply = (a: number, b: number): number =>
   {
      return a * b;
   }
    console.log(multiply(5, 10)); // calling the function */

//  Example 3: Arrow function and implicit return type
  /* let add = (a: number, b: number): number => a + b;
  let multiplhy = (a: number, b: number): number => a * b;

    console.log("Addition: " + add(5, 10)); // calling the function 
    console.log("Multiplication: " + multiplhy(5, 10)); // calling the function */ 

// Example 4: Arrow function with single parameter
  /* let square = (x: number): number => x * x;
    console.log("Square: " + square(6)); // calling the function
 */
// Exammple 4: Arrow function with  optional parameter
    
let displayDetails=( id ? : number ,name ?: string, mailid ?: string): void =>
     {
            console.log("ID: " + id);
            console.log("Name: " + name);
            if(mailid!==undefined)
                {
                     console.log("Mail ID: " + mailid);
                }
     }
     displayDetails(101,"John Doe")
     displayDetails(102,"Jane Smith","test@gmail.com");


// Example 5: Arrow function with default parameters
 /* let calculateDiscount = (price: number, rate: number = 0.50): void =>
 {
   let discount : number = price * rate ;
    console.log("Discount: " + discount);

 }

  calculateDiscount(500 ,0.30); // using default rate 
  calculateDiscount(500); // using provided rate */

// Example 6: Arrow function with rest parameters
   let  findElements=(...elements : (number | String)[]) :number =>
           {
                    return elements.length;
           }

   console.log(findElements(10,"Hello",20,"Welcome",30));
    console.log(findElements("TypeScript","JavaScript","Python"));
    console.log(findElements(100,200,300,400,500,600));




 



   
