// Method overloading and cunstroctor Overloading in typscript
// There will be multiple method signature but there will be one comman implentation that is method overloading
// There will be multiple method signature of cunstroctor and there will be one comman implementation that shoud be match
// with other signature.

class Calculator {
  // Constructor Overloading
  constructor(); // Default constructor
  constructor(a?: number, b?: number); // paramterized constructor
  constructor(a?: number, b?: number) {
    if (a !== undefined && b !== undefined) {
      console.log("Sum of a and b :", a + b);
    } else {
      console.log(" Default constructor called ....");
    }
  }

  // Method overloading - Multiple signature having one single implementation that is called Method overloading
  add(a: number, b: number): number;
  add(a: number, b: number, c: number): number;

  add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
      return a + b + c;
    }
    return a + b;
  }
}


// Constructor overloading 
let calc1 = new Calculator();
let calc2 = new Calculator(10, 20);

// Method overloading 
console.log("Adding two Numbers :",calc1.add(10,20));
console.log("Adding three Numbers :",calc2.add(10,20 ,30));


