// string - text or combination of characters 

/* 1. Single Quate : String Literal ('Single Quate')
   2. Double Quate : String Literal ('Double Quate')
   3. Backtick(``) : String template - when we try to use a string variable inside another string value $(variable)

   index in string starts with 0 

   '' or "" or `` 
*/

// Declaration of strings 
let str1 :string = 'This is string with single quate';
let str2 :string = "This is string with double quate";
let str3 :string = `This is string with back tick`;

console.log(str1);
console.log(str2);
console.log(str3);

// When to Use back tick 
let num :number =10;
console.log("Number is ",num); // valid 
console.log("Number is num");  // invalid
console.log('Number is ${num}'); // invalid
console.log(`Number is ${num}`); // valid 

// string method 

let str : string = "Hello, TypeScript";
// 1. length - find the length of string (how many number of character)
console.log("length of string :" ,str.length);

// 2. toUpperCase() and toLowerCase()
console.log("Uper Case:" ,str.toUpperCase());
console.log("Lower Case:" ,str.toLowerCase());

// 3. charAt(index)  and indexOf(string)
console.log("Character at 9th index:" ,str.charAt(9)); // y
console.log("Index of  type:" ,str.indexOf("ipt")); // 15

// 4. substring(starting index , ending index) : 
// Hello , TypeScript
// Ending idex is exclusive
console.log(str.substring(8,18)); // TypeScript

// 5. inculde() : return true or false (boolean)
// string value is case sensetive
console.log(str.includes("abc"));
console.log(str.includes("TypeScript"));
console.log(str.includes(" "));

// 6. startWith() and endWith() --> return boolean value (ture /false)
//  Case sensitive 
console.log("Start with", str.startsWith("Hello"));
console.log("Start with", str.endsWith("TypeScript"));

// 7. replace() : 
//  Hello , TypeScript
 console.log(str.replace("TypeScript" , "World !"));
 // 8.split() : break the string into multipe parts based on the delimeter, return an array 
 // Ex:1
 let word :string[] = str.split(" ");
 console.log(word); 

 // Ex: 2
 let mystring : string ="abc@gmail.com,arctsYSD";
 let arr=mystring.split(",")
 console.log(arr[0]);
 console.log(arr[1]);

 // 9 trim() trimStart(), trimEnd()
 mystring = "     Welcome to typescript    ";

 console.log("Original string :" ,mystring );
 console.log("trim string :",mystring.trim());
 console.log("trimStrat string :",mystring.trimStart());
 console.log("trimEnd string :",mystring.trimEnd());

 // 10. cancat() : 
 str1 = "Welcome";
 str2 = "to typescript";
 str3 = "and Javascript";

 console.log("After cancatination :",str1.concat(str1));
 console.log("After cancatination :",str1+ str2);
 console.log(("Welcome") .concat ("to typescript"));
 console.log(str1.concat(str2).concat(str3));

 // concept of string immutability (can not change the original value)
 // num=10
 let res =num+5;
 console.log(res);
 console.log(num);

 str1 = "Welcome";
 let modifiedstring =str1.concat("To type script");
 console.log(str1);

 // multi line string 
 let multiline : string =`Welcome 
                                to typescript`
console.log(multiline);





 














