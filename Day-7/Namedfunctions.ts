/*

A. Named Function : A function that is declared with a name 

Syntax: function functionName(Parameter) : return type 
                 
                 {
   
                      // Block of code 
                 }

                 functionName(arguments);// calling the function/ invoking the function

*/
// Example 1: Named function without parameters and without return type
/* function display(): void 
{
    console.log("Hello, welcome to TypeScript!");
}
display(); // Calling the function */

// Example 2: Named function with parameters and with return type
/* function addNumbers(a: number, b: number): number 
{
    return a + b;
}

let result=addNumbers(10,15);
console.log("Sum is: " + result); // Calling the function and displaying the result */

// Example 3: Named function with rest parameters
// Rest parameters don't restrict the number of arguments to be passed to the function
/* function addNumbers1(...nums: number[])
{
     let i;
     let sum: number =0;
        for(i=0;i<nums.length;i++)
        {
            sum=sum+nums[i];
        }
        console.log("Sum is: " + sum);
}
addNumbers1(10,20); // calling with 2 arguments
addNumbers1(10,20,30,40,50); // calling with 5 arguments */

// Example 4: Named function with rest parameters - multiple data types

/* function findElements(...elements : (number | String)[]) :number
           {
                    return elements.length;
           }

   console.log(findElements(10,"Hello",20,"Welcome",30));
    console.log(findElements("TypeScript","JavaScript","Python"));
    console.log(findElements(100,200,300,400,500,600)); */

// Example 5: Named function with optional parameters
    /* function displayDetails( id : number ,name: string, mailid ?: string): void
     {
            console.log("ID: " + id);
            console.log("Name: " + name);
            if(mailid!==undefined)
                {
                     console.log("Mail ID: " + mailid);
                }
     }
     displayDetails(101,"John Doe")
     displayDetails(102,"Jane Smith","test@gmail.com"); */

// Example 6: Named function with default parameters
  /* function calaculateDiscount(price: number, rate: number =0.50): void 
  {
            let discountedPrice : number = price *rate;
            console.log("Discounted Price: " + discountedPrice);
            
  }

    calaculateDiscount(1000,0.30); // calling without rate parameter
    calaculateDiscount(1000); // calling with rate parameter
 */