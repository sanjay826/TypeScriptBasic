/*
   Array in TypeScript
   --------------------
   - An Array is special type of variable that store multiple values. 
   - The values can be of the same type or different types.
   - Arrays are declared using square brackets [].or the generic Array<T> syntax.
   - Indexing starts from 0.
   - Arrays can be of fixed size or dynamic size.
   - TypeScript provides various methods to manipulate arrays like push, pop, shift, unshift, splice, slice, etc.
   - Arrays can also be multi-dimensional.
   - Arrays are an orderd collection of elements. 

*/
// Approach 1: Using literal syntax
 /* let names : string[] =[]; // Declaration

 // initialization / Assiging values 
  /* names[0] = "Alice";
  names[1] = "Bob";
  names[2] = "Charlie";
  names[3] = "Diana"; 
  names[4] = "Eve";
   */ 
/* let  names: string[] = ["Alice", "Job", "Charlie", "Diana"]; // declaration + Initialization
console.log("Names Array:", names); */

// Approach 2: Using generic Array<T> syntax
/* let empNames : Array<string> =["Alice", "Job", "Charlie", "Diana"];
let empIds : Array<number> =[101, 102, 103, 104];
let data : Array<string | number> =["Alice", 101, "Job", 102];
let mixedData : Array<any> =["Alice", 101, true, 45.67];

console.log("Employee Names:", empNames);
console.log(empNames[1]); // Accessing elements using index
console.log("Total Employees:", empNames.length); // Length of the array */

/* console.log("Employee Ids:", empIds);
console.log("Data Array:", data);
console.log("Mixed Data Array:", mixedData);
 */

// Example 1: Iterating over an array using a traditional for loop

/* console.log("Employee Names ............");

for(let i=0; i<empNames.length; i++)
{
    console.log(`Employee at index ${i}: ${empNames[i]}`);
}
 */
// Example 2 : Iterating over an array using for..in loop (index based)
/* console.log("Employee Ids ............");

for(let i in empIds)
{
    console.log(`Employee Id at index ${i}: ${empIds[i]}`);
}

// Example 3: Iterating using the for...of loop (values)
 console.log("Mixed Data ............");

 for(let value of mixedData)
 {
     console.log(value);
 } */

 // Example 4: Passing an array to the function 
 // Search an element in a array using function

 /* function search(ele : number, arr : number[]) : boolean

        {
            for(let i=0; i<arr.length; i++)
                {
                    if(arr[i] ===ele)
                    {
                        return true;
                    }
                }

             return false ;

        }

        let arr: number[]= [10,20,30,40,60,70];

        console.log(search(30,arr));
        console.log(100,arr); */

// Example 5: A function takes an Array and return an array 

function capitalizedWord(arr :string[]) :string[]
       {
          let result : string[] =[];
          for(let i=0; i<arr.length;i++)
          {
            result[i]=arr[i].toUpperCase();
          }

          return result;    
       }

let words : string[] = ["Hello", "world", "TypeScript"];
console.log(capitalizedWord(words));