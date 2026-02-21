// Parent 

class Person
{
    public name : string;// public property - accessible anywhere
    protected age : number; // protected property - accessible within the class and its subclass 
    private ssn : number; // private property - accessible only within class 

    constructor(name : string,age : number,ssn : number )
    {
        this.name=name;
        this.age=age;
        this.ssn=ssn;
    }
    displayInfo()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.ssn);

    }
}

class Employee extends Person
{
    private employeeId : number; 

    constructor(name : string,age : number,ssn : number , employeeId :number)
    {
        super(name, age, ssn)
        this.employeeId= employeeId;
    }

showEmployeeDetails()
{
    console.log(this.name); // public - accessible 
    console.log(this.age);  // protected - accessible 
   // console.log(this.ssn)  // Error : Private Property
    console.log(this.employeeId); // private , still we can access since it is declared inside the same class 

    
}

}
let emp= new Employee("Sanjay",34,24425,101);
emp.displayInfo();
emp.showEmployeeDetails();

console.log(emp.name); // Accessible 
//console.log(emp.age); // Not Accessible 
//console.log(emp.ssn); // console.log(emp.age); 

