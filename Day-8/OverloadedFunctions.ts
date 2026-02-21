// Step 1:  Write a signature of functions 
// step 2:  implement the function
// step 3:  call the function


// Example 1: Different parameter types(data types)
/* function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(param: number | string): string 
{
         if(typeof param === 'number')
         {
            return(`User ID is : ${param}`);
         } else 
         {
            return(`User Name is : ${param}`);
         }
}

console.log(getInfo(101));
console.log(getInfo("John Doe")); */

// Example 2: Different number of parameters
/* function add(a: number , b: number) : number;
function add(a: number , b: number , c: number) : number;

function add(a: number , b: number , c?: number) : number
    {
        if (c!== undefined)
        {
            return a + b + c;
        }

        return a + b ;
    }

console.log(add(10,20));
console.log(add(10,20,30)); */

// Example 3: Different return types
 /* function processInput(input: string): string;
 function processInput(input: number): number;

 function processInput(input: string | number): string | number        
 {
      if (typeof input === 'string')
      {
            return input.toUpperCase();
      }
      else 
      {
            return input*2;
      }
 }

 console.log(processInput("Welcome"));  // Output: "HELLO"  
 console.log(processInput(5));         // Output: 10
 */
// Example 4: 
function greet(name : string): string;
function greet(age : number) : string;
function greet(isMarried : boolean) : string;

function greet(value : string | number | boolean) : string

         {
            if (typeof value === 'string')
            {
                return `Hello, ${value}!`;
            }else if (typeof value === 'number')
            {
                return `You are ${value} years old.`;
            } 
            else {
                let res : string = value ? "You are married." : "You are single.";  
                return res;
            } 
         }

console.log(greet("John"));       // Output: "Hello, Alice!"
console.log(greet(30));          // Output: "You are 25 years old."
console.log(greet(true));       // Output: "You are married."
console.log(greet(false));      // Output: "You are single."
