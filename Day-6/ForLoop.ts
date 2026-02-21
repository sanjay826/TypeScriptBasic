// for Loop : A for loop is used to repeat a block of code a specific number of times.
//1️⃣ What happens if you miss any part of the for loop?

//All three parts are optional.

/* let i: number = 0;
for (; i < 3; ) {
  console.log(i);
  i++;
}
 */
// Syntex :
//for(initialization; condition; increment/decrement)

// Example 1: Print numbers from 1 to 10
/* for(let j=1;j<=10;j++)
{
    console.log(j); 
} */

// Example 2: Print even numbers from 1 to 10

// Method 1 
 /* for(let i=2;i<=10;i+=2)
 {
    console.log(i);
 } */

 // method 2
 /* for(let k=1;k<=10; k++)
 {
  if(k%2==0)
  {
    console.log(k);
  }
 } */

  // Example 3: Print numbers from 10 to 1

  /* for(let i=10;i>=1;i--)
  {
    console.log(i);

  }
 */
// local vs global variable
  /* let i :number;
  for(let i=1;i<=5;i++)
    {
        console.log(i);
    
    }
    console.log(i); */

    /* let i :number;
    for(i=1;i<=5;i++);

    console.log(i); */