let numbers : number []=[1,2,3,4,5];
let fruites : string[]= ["Apple","Banana","Mango","Papya", "Pear","Kiwi"];

console.log("Numbers of Arrar :", numbers);
console.log("Fruite of Array :",fruites); 

// length attribute (Not a method)
console.log("Size of number of length :",numbers.length);
console.log("Size of furites of length :",fruites.length);

// 1. Push() - Add single/ multiple elements to end of the array 
// Syntax : array.push(element1......ElementN)

numbers.push(6,10);
console.log("After Push",numbers);

// 2. Pop() : Remove the last element from an array 
// Syntax : array.pop()
console.log("befor remove fruites from array :",fruites);
fruites.pop();
console.log("After remove fruites list from array :" ,fruites);
numbers.pop();
console.log("After removing the Numbers :",numbers);

// 3. shift() - Removes the first element from an array
// Syntax :array:shift();
let firstNumber =numbers.shift();
console.log("After shift ", numbers);
console.log("remove Element",firstNumber);

// 4. unshift() : Adds single or multiple element to bigining of an array 
// Syntax : array.unshift(element1,....elementN)
let addedItem=fruites.unshift("Gragan", "Gava", "Papaya");
console.log("After adding the item",fruites)
console.log("Added Item" ,addedItem);

// 5. concat() - Combines two or more arrays of same type  
// Syntax : array.concat(array1....arrayN)
let Concatented=numbers.concat([7,8],[10,11])
console.log("Concatented Array :",Concatented);

// 6. Slice() -Extracts a section of an array 
// Starting Index from zero
// Ending Index will be exclussive  Ex. if 3 is ending Index it will consider 2 (3-1=2) 
// Syntax : array.slice(start , end)
console.log("before Splice :",fruites)
let extractedArray =fruites.splice(1 ,2);
console.log(extractedArray);

// 7. Splice() : Adds/remove elements from an array (from everywhere)
// Syntax : array.splice(start , deleteCount, item1 ...itemN)

console.log("Current elements in fruites array",fruites);

//exam:1 only removing
let removedElements=fruites.splice(1,2); // here 1 is starting index,  2 is represent how many elements to be removed.     
console.log("After slice(1,2 :",fruites); 
console.log("Removed Elements :",removedElements);

// Examp: 2 not removed but added 
fruites.splice(1,0,'Grapes','Pineapple');
console.log("After slice((0,'Grapes','Pineapple') :",fruites);

//Exam : 3 Both removed and added  
fruites.splice(1,2,'Red Cherry' ,'Cherry');
console.log("After slice 1,2,'Red Cherry' ,'Cherry' :",fruites);

// 8. indexOf() : finds the index an element, if element not found then return -1
// Syntax: array.indexOf(srachElement) or array.indexOf(searchElement , strating index)

// Examp : 1 
let PearIndex=fruites.indexOf("Pear");
console.log(PearIndex);

// Examp : 2 
let getIndex=fruites.indexOf("RedBear");
console.log(getIndex);

// Examp : 3 
PearIndex=fruites.indexOf("Pear",3);
console.log(PearIndex);


// includes() - checks if exists 
// true or false 
// Syntax : array.includes(searchElement , fromindex)

let isAppleExist = fruites.includes("Apple");
console.log("Does furites Include Apple ",isAppleExist);

let isMangoExist = fruites.includes("Mango");
console.log("Does furites Include Mango ",isMangoExist);

// 10. toString() : Convert array to string 
// Syntax : array.toString()
console.log(numbers);
let numbersToString =numbers.toString();
console.log("Converted Array to String :" , numbersToString);

let myarray :string[] =['w','e','i','c','0','m','e'];
console.log("This is my original Array",myarray);
let str:string =myarray.toString();
console.log("Converted Array",str);











