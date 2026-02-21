// 1. Number Type 
  // Represent both integer and floating point number

  /* let age: number =25;
  let price =25.5;
  let big=809789789798;
    console.log("Age:", age);   
    console.log("Price:", price);
    console.log("Big Number:", big); */

// 2. String Type
  // Represent sequence of characters

  /* A. SingleQuote ('') 
  B. DoubleQuote("")
  C. Backtick(``) */

  /* let firstName: string ='Sanjay';
  let lastName: string ="Kumar";
  let fullName: string =` ${firstName} ${lastName} `;
  console.log("Full Name:", fullName);

  let greeting = `hello ${firstName} ${lastName} ! Welcome to TypeScript`;
  console.log(greeting); */

  /* 3. Boolean Type 
   Represents true or false values */
   /* let isStudent: boolean = true;
   let hasJob : boolean = false;

   console.log("Is Student :",isStudent);
    console.log("Has Job :",hasJob);
 */
    /* 4. null & undefined 
   Special types for absence of value. 
 */
/* let employevalue: null = null;
let addressvalue: undefined = undefined;
console.log("Employee Value:", employevalue);
console.log("Address Value:", addressvalue);

let price : number ;
console.log(price); //undefined */

/* let  value : any ="Welcome";
value = 100;
value = true;
console.log("Value:", value); */

 //5. Union Type - Combine multiple types 

 let id : number | String | boolean;
 id = 101;
 console.log("ID as Number:", id);  
    id = "TS101";   
    console.log("ID as String:", id);  
    id = true;      
    console.log("ID as Boolean:", id);






