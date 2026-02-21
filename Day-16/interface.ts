/*
     1. An interface in TypeScript is a way to define the structure of an object 
     2. it tells the compiler what properties and type an object should have. 
     3. it's like a blueprint for objects . 

     Abstract Method : We only signature of the method(There is no implementation)

     Syntax : 
      interface Interface 
      {
         properties 
         abstract  method 
      }

      1. Regular properties 
      2. Optional properties
      3. Readonly properties  & function type 
      4. Extending interface 
      5. class implements  interface 

*/

// Example 1 : Basic interface
interface Person {
  name: string;
  age: number;
}

let student: Person = { name: "Sanjay", age: 30 };

console.log(student.name);
console.log(student.age);
console.log(student);

// Optional Properties (?)

interface Employee {
  eid: number;
  ename: string;
  edepartment?: string; // optional property
}

let emp: Employee = {
  eid: 101,
  ename: "Sanjay Kumar",
};

let emp1: Employee = {
  eid: 102,
  ename: "Vijay Kumar",
  edepartment: "Accountant",
};

console.log(emp.eid, emp.ename, emp.edepartment);
console.log(emp1.eid, emp1.ename, emp1.edepartment);

// Example : Readonly property (readonly to prevent modification ) & function type

interface Book {
  title: string;
  readonly isbn: string;
  display(): void;
}

let b1: Book = {
  title: "Learn Playwright",
  isbn: "123-ABC",

  display() {
    console.log(b1.isbn, b1.title);
  },
};

console.log(b1.title);
console.log(b1.isbn);
b1.display();

console.log("After changing the values..... ");
b1.title = "Learn TypeScript";
console.log("This is the value of after changing: ", b1.title);
//b1.isbn ="3456 -CDFG"; // Error cannot assign to 'isbn' because it is a readonly property

// Example 4: Extending Interface (Inheritance is applicable)
// Parent interface
interface Animal {
  name: string;
}

// child interface
interface Dog extends Animal {
  color: string;
}

let mydog: Dog = {
  name: "Dogesh Bhai",
  color: "Brown",
};
console.log(mydog.name, mydog.color);

// Example 5 :
// class can extends another class
// interface can extands another interface
//  class can implements interface

interface Hospital {
  paitent_name: string;

  paitentInfo(): void;
}

class Paitent {
  paitent_name: string; // inherited from interface
  paitent_age: number;
  static hospital_name = "AIIMS";

  constructor(paitent_name: string, paitent_age: number) {
    this.paitent_name = paitent_name;
    this.paitent_age = paitent_age;
  }

  paitentInfo() {
    console.log("Maleria paitent");
  }
}

let p1 = new Paitent("Kumar Gaurav", 38);
console.log(p1.paitent_name);
console.log("Hospital Name: ", Paitent.hospital_name);
console.log(p1.paitent_age);
p1.paitentInfo();

// Use abstract class and force child class to implement method

abstract class Shape {
  abstract area(): number;
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }
}

let s1= new Square(4);
let square=s1.area();
console.log(square);
