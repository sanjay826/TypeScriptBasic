// Objects : Obejct contains properties and behavior.
// Obejct : object contains variables & methods
// Object is collection of key and value pairs
//

// Ex:
// employee - name , desin, sal , dep
//                        bonus()

//  Differenet ways to create an object in JS/TS
// 1. using object type - Directly define the value for variable (JS/TS)
// 2. Inline Type object  - We also define the datatype of the keys (TS)
// 3. Uing type alias (JS/TS)
// 4. Uing the class (JS ES16/TS)

// 1. using object type - Directly define the value for variable (JS/TS)
// The TypeScript object type represents all values that are not in primitive types.

/* let employee :object = {
    name : 'Sanjay', 
    age : 34, salary :110000,
    job : "Engineer"
}; */

let employee = 
{
  name: "Sanjay",
  age: 34,
  salary: 100000,
  job: "Engineer",
  getDetails :function() : string{
    /* console.log(this.name , this.age, this.job); */
    return `${this.name} is a ${this.age} old ${this.job} and earning ${this.salary}`;
  },
};

console.log(typeof  employee);
console.log(employee.name);
console.log(employee.getDetails());


// accessing object - approach 1 (using dot notation)
console.log(employee.name, employee.age, employee.job);

// accessing object - approached 2 [using bracket notation]
console.log(employee["name"], employee["age"], employee["job"]); 
console.log(employee["getDetails"]());

// modify the value in object 
employee.job ="Manager"; 
employee["job"] ="manager"; 
console.log("Modifed Job is :" , employee.job);

// Inline Type Object - We also define the datatype of the keys (TS)

let student:{
    name:string ,
    age : number,
    grade :string, 
    getSummary : () => string
} ={
    name : "Sanjay",
    age : 34,
    grade : "A",

     getSummary : function()
     {
        return `${this.name} is ${this.age} year old and scored grade ${this.grade}`
     }
}
console.log(student.getSummary());

// Problem with Inline Type object : Need to repeat sturcture for every object 

let student1 : 
{
   name : string,
   age : number ,
   address : string
   getSummay : ()=> string

} = 
{
    name : "Sanjay Kumar",
    age : 34,
    address : "New Delhi",
    getSummay : function ()
    {
        return `${this.name} is ${this.age} old and address ${this.address} `
    }
    
}
// 3. Uing type alias (JS/TS) : allowas creating a new name for an existing type 
// Exmaple 1: 

type Product={
    name :string,
    price : number,
    getInfo : () => string
}

let book1 :Product = {
name : "Learn Java",
price : 300,
getInfo : function(){
    return `${this.name}, cost ${this.price} `}
}

let book12 :Product = {
name : "Learn Python",
price : 500,
getInfo : function(){
    return `${this.name}, cost ${this.price} `}
}

let book13 :Product = {
name : "Learn Typescript",
price : 600,
getInfo : function(){
    return `${this.name}, cost ${this.price} `}
}

console.log(book1.getInfo());
console.log(book12.getInfo());
console.log(book13.getInfo());



for(let i in book13)
{
    console.log(book13.name);
    console.log(book13.price);
}

// Exam: 2 Interscetion Types 
type personal ={name : string , age : number , }

type conact = {
    email : string, 
    phone : number
}; 

type Canidate = personal & conact & {
    getContactInfo : ()=> string;
}

let canidate : Canidate = {
 name : "Sanjay",
 age : 34,
 email : "test@gmail.com",
 phone : 1234567890 ,
  getContactInfo : function(){

    return `${this.name} can be contacted ${this.email} or  ${this.phone}`
  }
}
console.log(canidate.getContactInfo());

// 4. Uing the class (JS ES16/TS)
class Person {
    ssn :string;
    firstname : string;
    lastName : string;

    constructor(ssn :string ,firstname : string,lastName :string )
    {
        this.ssn=ssn;
        this.firstname =firstname;
        this.lastName = lastName;
    }

    getFullName() : string 
    {
        return `${this.firstname} ${this.lastName} `
    }

    getDetails() : string 
    {
         return `${this.ssn},Name : ${this.getFullName()} `
    }
}

let person1 = new Person('12345678','Joy','joRDAN');
    console.log(person1.getDetails());

let person2 = new Person('09786786','ROy','BOY');
    console.log(person2.getDetails());

let person3 = new Person('08766654','Josh','Rosh');
    console.log(person3.getDetails());