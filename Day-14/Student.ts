/* 
1. Class 
2. Read Only Property 
3. Optional Property 


4. Static variable and methods 
 A. static properties/ method are common/ shared across 
 B. Static Properties/ method can be accessed class name directly 
 C. Static properties/ method can be modified using any class
 D. We cannot use this for static properties, instead we can class name.  

*/

class Student {
  readonly studentId: number; // read only property(can only assigned once , inside constructor)
  name: string; // Regular Properties
  email?: string; // Optional properties
  static schoolName : string = "Project High School Nawahar"; // static variable shared among all instances/ obejct 

  // constructor
  constructor(id: number, name: string, email?: string) {
    this.studentId = id;
    this.name = name;
    this.email = email; // if you dont define pass email then it is undefined
  }

  // Method

  displayInfo(): void {
    console.log("Student Id:", this.studentId);
    console.log("Student Name:", this.name);
    if (this.email) {
      console.log("Student Email :", this.email);
    } else {
      console.log("Email is not provided");
    }
    console.log("School Name :", Student.schoolName)
  }
  
  static changeSchoolName(newName : string) : void
  {
    Student.schoolName = newName;
  }

}

// usage
let s1=new Student(101,"Sanjay Kumar");
let s2=new Student(102,"Vijay Kumar","sanjay@gmail.com");

// Display student info 
s1.displayInfo();
s2.displayInfo();

// Try to modify the studentID of S1 object 
//s1.studentId ="109"; // can not assign to studentId bacause it is read only properties. 

Student.changeSchoolName("Giridih Collage Giridih");

console.log(" Displaying student info after changing school name ");

s1.displayInfo();
s2.displayInfo();


