//1.Write a program to print numbers from 1 to 10 using a do-while loop.
let i:number=1;
do
{
    console.log(i);
    i++;

}while(i<=10)
console.log("******************");
//2.Write a program to print even numbers from 1 to 20 using a do-while loop.
let j:number=2;
do{

    console.log(j);
    j+=2

 }while(j<=20);
    console.log("******************");
//3.Write a program to print numbers from 10 to 1 using a do-while loop.
let k:number=10;
do
{
   console.log(`Number ${k}`);
   k--;
}while(k>=1);
console.log("******************");
//4.Write a program to print the multiplication table of a given number using a do-while loop.
let num:number=5;
let mul:number=1;
do
{
   console.log(`${num} * ${mul} = ${num*mul}`);
   mul++;
}while(mul<=10);
console.log("******************");
//5.Write a program to calculate the sum of first n natural numbers using a do-while loop.
let n:number=10;
let sum:number=0;
let count:number=1;
do
{
   sum+=count;
   count++;
}while(count<=n);
console.log(`Sum of first ${n} natural numbers is: ${sum}`);

//
 



