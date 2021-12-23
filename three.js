// function printName() {

//   console.log("habib");
// }

// printName();

// var a = 10;
// console.log(a);

// console.log(a);
printName();

var a = 10;
var b = 100;
var c = 50;

function printName() {
  var name = "habib";
  //   console.log("Habib");
  console.log(name);
}
console.log(b);
printName();

/* 

    # interview questions
        1. parts of execution context
        2. phases of execution context
        3. Hoisting
        4. call stack

*/

/* 

    # Execution context
        a. part (2)
        b. phases (2)

    global Execution context
*/

/*
    1.  Execution context: two parts.
    a.	Memory component ( Variable Environment) : stored variables and functions as key value pairs
    b.	Code component ( Thread of execution ) : code 

    2. Execution context phases: Running Javascript code creates an execution context. Execution context is created in two phases.
        a.	Creation phase ( Memory creation phase )
        b.	Execution phase ( Code execution phase )

    3. Call Stack: To manage Global and Local execution contexts, javascript uses a stack which is called Call-Stack (execution context stack, program stack, control stack, run time stack, machine stack).

    4. Hoisting: 
        a.	Arrow function behaves like a variable
        b.	In creation phase variables are assigned undefined
        c.	function name stores the whole function body as value

*/
