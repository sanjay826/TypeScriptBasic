 /* 
 * Tuples in TypeScript
 * A tuple is a fixed-length array where each element has specific type. 
 * It helps in sorting multiple filds of different data type together. 
 */

 // Example 1 : tuple with 2 values of string, number 
 /* let person : [string, number] = ["Sanjay", 101]; 
 console.log(person[0]);
 console.log(person[1]);

 console.log(person); */

 // Example 2 : Tuple with multiple value 
 let user : [number, string , boolean , number,string] =[10,"Sanjay",true,45,"Joy"];
 console.log(user);

 // Example 3 : Iterating over a tuple using a traditional for loop 
console.log("Using traditional for Loop");
 for(let i=0; i<user.length;i++)
 {
    console.log(user[i]);
 }

 // Example 4: Iterating uisng a 'for ..in' loop (index based iteration)
 console.log("Using traditional for..in");
 for(let i in user)
 {
    console.log(user[i]);
 }

 //  Example 5: Iterating using a 'for ..of' loop (value based iteration)
 console.log("Using for..of");
 for(let value of user)
 {
    console.log(value);
 }

// Example 6: Tuple Array (Array of Tuple)
console.log("Tuple Array (Array of Tuple)");
let students : [number , string][] = [[101 ,'Kumar'], [102 ,'Joy'], [103 ,'Kumar']];
console.log(students.length);
console.log(students[0]);
let tp = students[0];
console.log(tp[0]);
tp =students[1];
console.log(tp[0]);
console.log(tp[1]);


