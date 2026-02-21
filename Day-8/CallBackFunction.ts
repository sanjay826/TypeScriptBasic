// CallBack function  : A function passed as an argument to another function and executed later.

//Example 1 :
// function that takes callback as an argument
/* function greet(name : string , callback :(message: string)  => void)
{
     console.log(name);
     callback("Hello");
}

// callback function
function showMessage(message : string)
{
    console.log("Message: " + message);
}

// calling the function with callback


greet ("John", showMessage); */

// Example 2:

/* function sum( a : number , b : number , callback : (result :number)=> void )
{
   let result : number = a + b;
   callback(result);
}

// callback function
function displayResult(result :number) :void
  {
    console.log(result)
  }

  sum(5, 10, displayResult); // calling the function with callback */

// Example 3 : Callback in Asynchronous Code (Very Common in Interviews)

/* function fetchData(callback: (data: string) => void) { setTimeout(() => {
    callback("Data fetched from server");
  }, 2000);
}

fetchData((data) => {
  console.log(data);
}); */
