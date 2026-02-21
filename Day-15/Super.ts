// Super() - used to invoke immediate parent class cunstructor
// super - used to invoke immediate parent class method.

// Super - can not be used to invoke the parent class property(in java, it is possible)

class Parent {
  num: number = 12;

  constructor() {
    console.log("This is Parent class cunstructor");
  }

  display() {
    console.log("This is display() method from parent class....");
  }
}

class Child extends Parent {
  num: number = 20; // overriden

  constructor() {
    super(); // this will call parent class cunstructor(must be called)
    console.log("This is child class cunstroctor ....");
  }

  show() {
    console.log(this.num);
  }

  display() {
  
    console.log(" This is display() method from child class.. ");
    super.display(); //This will invoke parent class method. 
  }
}

let c1 = new Child();
c1.show();
c1.display();
