var a = 10;

function sum() {
  var b = 500;

  console.log(a);
  console.log(b);
  function getNumber() {
    console.log(a);
    console.log(b);
  }
  getNumber();
}

console.log(a);
// console.log(b);
sum();

/**
 * একটা Execution Context এর ই কেবল lexical environment থাকে:
 * যেকোনো Execution Context এর lexical environment হচ্ছে তার memory component এবং তার parent এর lexical environment.
 */

/**
 7. Scope: it means where we can access a specific variable or function in our code. Scope is directly dependent on the Lexical Environment.

 

8. Lexical Environment: Lexical environment is the local memory of execution context along with the lexical environment of it’s parent. (lexical means ‘in hierarchy’ or ‘in sequence’)

 

function a() {

            var b = 10;

            c();

            function c() {

            }

}

a()

Now we can say, c function is lexically sitting in a function. or c is hierarchically inside in a.

 

9. Scope chain: The way javascript searches for variables from it’s local memory to the lexical environment of it’s parent, is called scope chain. Or the chain of  lexical environments is called scope chain.

 

10. Temporal Dead Zone: Temporal dead zone is the time since when the let variable is hoisted and till it is initialized some value. At the time of temporal dead zone, if we try to access a variable, it will give us a reference error.

 

11. Block: Block is defined by { } these curly braces. It is also known as Compound statement. In block let and const variables are stored in block scope, but var variables are stored in global scope. So we say, let & const are in block scoped.
 */
