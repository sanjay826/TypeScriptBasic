// Inhertance  :  Whatever the variable and method we created in one class , we can reuse them in another class 
// or we extend the class into another class like it is basically parent and child relationship 


// Inheretence : 
// A class can resuse the properties and methods of another class 
// Inheretence  is a mechanism where one class (child) can nherit the properties and methods of another class(parent)
// Inheretence allows you to resue the functionality of an existing 

// A - properties -- + Method  (Parent class / Base class/Supar class )
// B extends  A-- properties + Method (child class /drived class / Sub class)

// Method orverriding :
// A subclass /child class can provide a specific implementtaion of a method that is already defined in its superclass
// The method must have the same name , return type and parameters.

// Parent class
class Car
{
     name: string;
     color : string;
     model : string;


     constructor(name: string,color : string, model : string)
     {
          this.name =name;
          this.color =color;
          this.model=model;
     }


     start()
     {
        console.log("Car started ...");
     }

     stop()
     {
        console.log("Car stoped...");
     }

     displayInformation()
     {
        console.log(`Name : ${this.name} color : ${this.color} Model : ${this.model}`)
     }


}
// child class

class Honda  extends Car
{
    year: number ;

    constructor(name: string,color : string, model : string, year: number)
    {   
        super(name,color,model);
        this.year = year;
    }

    start()
     {
        console.log("Honda started ...");
     }

    yom()
    {
        console.log(`Name : ${this.name} color : ${this.color} Model : ${this.model} YOM : ${this.year}`);

    }
}

// child class  - Maruthi

class Maruthi extends Car 
{
    year: number ;

    constructor(name: string,color : string, model : string, year: number)
    {   
        super(name,color,model);
        this.year = year;
    }

    start()
     {
        console.log("Maruthi started ...");
     }

    yom()
    {
        console.log(`Name : ${this.name} color : ${this.color} Model : ${this.model} YOM : ${this.year}`);

    }
}

// Usage : 
// Craete Honda obejct 
let  honda = new Honda("Honda", "Red","Honda City",2024);

console.log(honda.name);
console.log(honda.color);
console.log(honda.model);
console.log(honda.year);

honda.start();
honda.displayInformation();
honda.stop();
honda.yom();

//  Create Maruthi 
let maruthi = new Maruthi("Maruthi", "Red","Maruthi Beleno", 2023);
maruthi.start();
maruthi.displayInformation();
maruthi.stop();
maruthi.yom();

// Parent class variable is holding child class object 

let car: Car=new Honda("Honda","Red","Honda City",2024);
car.displayInformation();
car.start();
//car.yom() // Not accessible yom() defined inside the child class but not there in the parent class.
 



