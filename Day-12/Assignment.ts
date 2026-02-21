// 1. Add an element to the end of an array using push.
let arr1: string[]=["Great" , "Grip", "Garaze","Green", "Groom","grand"];
console.log(arr1);
arr1.push("Red");
console.log(arr1);

// 2. Remove the last element from an array using pop.
console.log(" Remove last Element :",arr1.pop());
console.log(arr1);

// 3. Remove the first element from an array using shift.
  let firstElement= arr1.shift();
  console.log(firstElement);
  console.log(arr1);

  // 4. Add elements at the beginning of an array using unshift
console.log(arr1.unshift("Great"));
console.log(arr1);

//how to find added element by unshift method
console.log("Element added by unshift:", arr1[0]);

//5. Concatenate two arrays using concat
let arr2: string[] =["Boy", "blood","bludy", "Grey", "Red" , "Blue"];

console.log("Concatenate two array",arr1.concat(arr2));

// Q- Extract a subarray using slice.
let sliceData =arr2.slice(0 ,2);
console.log("Extract a subarray using slice :",sliceData);
console.log(arr2);

// Q - Insert and delete elements using splice.
   // Ex :1 
   let addedItem=arr2.splice(2,1,"Green");
   console.log("Insert and delete elements using splice :",addedItem);
   console.log(arr2);

// Q-8.Find the index of a specific element using indexOf
let greet:string =" Kumar Sanjay Ydava Sonardih "
console.log(greet.indexOf("Y"));//14

// Q .9 Check if an element exists in an array using includes

let IsGrey=arr2.includes("Grey");
console.log("Is GreyInclude or Not :" ,IsGrey); // true

// Q - 10 Convert an array to a string using toString.
  let concatnated =arr1.concat(arr2);
  console.log(concatnated.toString());

// Q- 11 Iterate through an array using forEach and print each element.
// Ex:1
arr1.forEach((element, index) => {
  console.log(`Index: ${index}, Element: ${element}`);
});

let isAvailable=arr2.forEach((element) => element.includes("Grey"));
console.log(isAvailable);

// Q : 12 Create a new array by doubling the values using map.
// Ex: 1
let numbers : number[] =[1,2,3,4,5,6,7];
let values=numbers.map((value)=>value*2);
console.log("Map double values",values);
// Create a Map with string keys and number values
let scores = new Map<string, number>();

// Add entries
scores.set("Alice", 90);
scores.set("Bob", 85);

// retrive the value 
console.log(scores.get("Alice"));
console.log(scores.get("Bob"));

// check existence 
console.log(scores.has("Bob")); // true
console.log(scores.delete("Alice"));

// Iterate over Map
scores.forEach((value, key) => {
console.log(`${key}: ${value}`);});

let valuse =numbers.map((value)=> value*2);
console.log(valuse);

// 13. Filter out even numbers from an array using filter

let evenNumbers =numbers.filter((value)=> value%2==0)
console.log(evenNumbers)

// 14. Find the sum of all numbers using reduce.
let sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);


// 15.Check if at least one element is even using some.

/*  numbers.some() */

 // 1. B , 2. C . 3. B 4. D, 5. B, 6. C , 7. B , 8. A , 9. B , 10. B , 11. B , 12. B , 13. D , 14. B 15. B
 // 16. B ,17. B , 18. C , 19. B , 20. B, 21. A , 22. B , 23. B , 24, B , 25. 6. 25. A , 27. A . 28. C 
 // 29. B , 30 , C  , 31. A , 32. A , 33. A , 34. C , 35. A , 36. C , 37. C , 38. A, 39. T ,F , F, T . 
 // 40. B , 41. A , 42. B Pop() , 43. A , 44. B , 45. A . 46. B , 47. B , 48. D , 49. A . 50. B  

 let arrd : string[] = ["one" , "TWO", "Three"];

 let getFilterValue=arrd.filter((x: string) => x === x.toUpperCase());
 console.log(getFilterValue);
 let msg= "hello".split("").reverse().join("");
 console.log(msg);

 // 1 What does the push() method do in TypeScript?
    // Ans : Adds one or more elements to the end of an array

     console.log("Original Value" ,arr1)
     arr1.push("BatMan");
     console.log("Updated Value" ,arr1) //['Great',  'Grip','Garaze', 'Green','Groom',  'grand','BatMan']
// 2. What is the output of ["a", "b"].pop()?

// Example: Using pop() to remove the last element

// Example 1: Simple array
let fruits: string[] = ["apple", "banana", "orange"];
console.log("Original array:", fruits); // ["apple", "banana", "orange"]

let removedFruit = fruits.pop();
console.log("Removed element:", removedFruit); // "orange"
console.log("Updated array:", fruits); // ["apple", "banana"]

// Example 2: Answer to your question
let letters: string[] = ["a", "b"];
console.log("Original array:", letters); // ["a", "b"]

let result = letters.pop();
console.log("Output of [\"a\", \"b\"].pop():", result); // "b"
console.log("Array after pop:", letters); // ["a"]

// Example 3: Multiple pops
let multipleNumbers: number[] = [10, 20, 30, 40];
console.log("Original array:", multipleNumbers); // [10, 20, 30, 40]

console.log("First pop:", multipleNumbers.pop()); // 40
console.log("Second pop:", multipleNumbers.pop()); // 30
console.log("Final array:", multipleNumbers); // [10, 20]

// Example 4: Pop on empty array
let emptyArr: string[] = [];
console.log("Pop on empty array:", emptyArr.pop()); // undefined

// 3. What does the shift() method do?
// Ans . B) Removes the first element
console.log("Original Item",numbers)
let reomvedItem =numbers.shift();
console.log("Removed Item",reomvedItem)

// 4. Which method adds an element to the beginning of an array?
// D. Unshift() method. 
console.log("Original Numbers",numbers);
let addedNumber =numbers.unshift(1);
console.log("Added Number",addedNumber);

//Example 1: Add a single element to the beginning
let fruit: string[] = ["banana", "orange"];
console.log("Original array:", fruit); // ["banana", "orange"]

let newLength = fruit.unshift("apple");
console.log("New array length:", newLength); // 3
console.log("Updated array:", fruit); // ["apple", "banana", "orange"]

// how to print added item for unshift method 
// 5. What is the output of ["a"].concat(["b", "c"])?

 let c=["a"].concat(["b", "c"]);
 console.log(c); // B) ["a", "b", "c"]
// 6. The slice() method: B) Returns a new array

console.log(numbers)
let sclicedNumber= numbers.slice(1,3);
console.log(sclicedNumber);
console.log(numbers)
// 7. What is returned by slice(1, 3) on [1, 2, 3, 4, 5]?
// A) [2, 3]

// 8. What does splice() do?
// Ans : B) Adds/removes items from an array
 let addedSplice=numbers.splice(8,0,8);
 console.log(addedSplice[7]);
 console.log(numbers.toString());


// 9. 





























