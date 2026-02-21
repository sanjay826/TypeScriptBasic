//=======foreach() , map(), filter(), some(),every()===========
// 1. forEach() -execute a function once for each array element. 
// It takes function as parameter
// syntax: array.forEach(function(currentValue, index,array){})
// CurrentValue - The current element being proccessed in the array
// index(optional) - The index of the current element being proccessed in the array
// array(optional) - The array the current element belongs to


// Exam : 1  Get index of all the fruites along with value.

let fruits : string[] =['Apple','Banana','Orange','Mango','Kiwi']

console.log("printing fruits along with index uing for loop");
 for(let i in fruits)
 {
    console.log(i , fruits[i]);
 }

console.log("printing fruits along with index uing forEach loop");

// anonymous function
fruits.forEach(function (element,index)
{
    console.log(`${index} - ${element}`);
})

// With Arrow function 
console.log("With Arrow function")
fruits.forEach((element,index)=>
{
    console.log(`${index} - ${element}`);
})

// Exam : 2 Print all value in uppercase 

fruits.forEach((element)=>{

    console.log(element.toUpperCase());

})

//2.  map() - Create a new array with the result of the calling the function on every element of an array
// It takes function as parameter 
// Returns the same number of elements that we have original array 
// Syntax : array.map(function(currentValue , index,array))

// Get squre of all the numbers in a array e.g - [1,2,3] then result should be [1,2,9]

let numbers : number[]=[1,2,3,4,5];
let newSquareArray=numbers.map((element )=>{

    return element*element;
});

console.log("New Squire array :",newSquareArray);
console.log("old array :", numbers);

// Exam : Double Each Number

/* let doubleNumber =numbers.map((element)=>{

    return element*2;
});
console.log("New Double Array :",doubleNumber); */
// Enhance the code : 
// if you have single return statement inside the arrow function then {} and return statement are optional
let doubleNumber =numbers.map((element)=> element*2);
console.log("New Double Array :",doubleNumber);

// filter() : Create new array with all the elemenents that pass/satisfy the function 
// It takes function as parameter 
// Return either same or fewer number of elements compared to original array. 
// Syntax : // Syntax : array.filter(function(currentValue , index,array))

// exam : get the only even number from array 
/* numbers.filter((num)=>{
     return num%2==0
});
 */
// enhnance the code 
let evenNumver =numbers.filter((num)=> num%2==0);
console.log(evenNumver);

//Ex2: Get the only number greater than 3 from any array 
let greaternumber = numbers.filter((num)=> num>3);
console.log(greaternumber);

// reduce() : Applies a function on every element of an array and return a single value.
// Syntax : array.reduce(function(accumulater, currentValue , index array){})
// accumulator -The accumulator value from previous iteration 
// currentValue : The current element being processed 

// Ex:1 get the total (sum) of all the element in an array 

/* let total =0
for(let i=0;i<numbers.length;i++)
{
    total=total+numbers[i];
}
console.log(total); */

/* let totalNumber =numbers.reduce((total, element)=>
    {
         return total + element
    })
console.log(totalNumber) */
 let totalNumber =numbers.reduce((total, element)=> total + element,0); // Here 0 is default value of accumaltor
console.log(totalNumber) 

// 5. some() - Checks if any element satisfy a condition 
// return true if at least one element passes the consition , else false 

// Syntax : array.some(function(currentValue , index,array))

// Ex:1 check array contain negative number 
let negativeNumber=numbers.some((element)=> element<0)
console.log("Negative number is there in Array ",negativeNumber);

// Ex : 2 check array contains positive number 

let positiveNumber=numbers.some((element)=> element>0)
console.log("positive number is there in Array ",positiveNumber);

// 6. every() - check if all elements satisfy a condtion 
// return true if all elements pass the constion else false 

// Syntax : array.every(function(currentValue , index,array))

// Ex:1 
let allTheNumberEven=numbers.every((element) => element%2==0)
console.log("All the number are Even",allTheNumberEven);

// Ex:2 

let greaterThanOne=numbers.every((element) => element>=1)
console.log("All the number are greate than one ",greaterThanOne);

// Ex:3

let allPositiveNumber=numbers.every((element) => element>0)
console.log("All the number are greate than one ",allPositiveNumber);




