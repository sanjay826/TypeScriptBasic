// if Consition

/*
if (condition) {
    // code to be executed if condition is true
}


*/
// Example : 1 if age is greater than 18 then print "You are eligible to vote"
/* let age: number = 15;
if (age > 18) {
  console.log("You are eligible to vote");
} */

/*
if(condition) {
    statement1; if condition is true
} else 
{
   statement2;
}
*/

// Eample 2: if number didvided by 2 then print "Even Number" else print "Odd Number"
/* let num : number =7;
if(num %2==0)
{
    console.log(`${num} Even Number`);
} else 
{
    console.log(`${num} Odd Number`);
} */

/* Nested if else condition 
     
     if(condition1) 
     {
        statement1;
    } else if (condition2) {
    statement2;
} else {
    statement3;
}
    
     
     */
// Example 3: Depending on marks , display appropriate grade
/* marks > =90  Grade A 
   marks >= 75  Grade B
   marks >= 60  Grade C
   Grade D
*/

/* let marks: number = 50;

if (marks >=90 && marks <=100) {
    console.log("Grade A");
} else if (marks >=75 && marks <90) {
    console.log("Grade B");
} else if (marks >=60 && marks <75) {
    console.log("Grade C");
} else {
    console.log("Grade D");
} */

// Example 4 : Browser selection using if else if ladder
/* let browser: string = "Chrome";

if(browser == "Chrome")
{
    console.log("You are using Chrome Browser");
}
else if(browser == "Firefox")
{
    console.log("You are using Firefox Browser");
}
else if(browser == "Edge")
{
    console.log("You are using Edge Browser");
}
else if(browser == "Safari")
{
    console.log("You are using Safari Browser");
} */

    // Switch Case Statement

   /*  
   switch(expression) 
   {
   case value 1: statement 1;
   break;
   case value 2: statement 2;
   break;
   case value 3: statement 2;
   break;
   default: statement ;
   } 
   */
   // Example 5 : Depending on the value of day, print the crossponding day of the week
   /* let day: number = 3;

   switch(day)
   {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;  
    default:
        console.log("Invalid Day");
   } */
    
// example 6 : The switch statement can also include an expression
let x : number =10, y : number =5;
switch(x-y)
{
    case 0:
        console.log("Result is zero");
        break;

    case 5:
        console.log("result is five");
        break;
    case 10:
        console.log("result is ten");
        break;
    default:
        console.log("Result is other than zero, five and ten");
}



