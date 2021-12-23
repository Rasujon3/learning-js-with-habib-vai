// Array or list

var a = [1, 2, 3, "habib", ["a", "b", 5]];
var b = a[4];

// console.log(b[2]);
// console.log(a[4][2]);

// Array or list End

console.log("For loop");
console.log(a.length);
for (let i = 0; i < 5; i++) {
  //   console.log(a[i]);
}

// Do While
console.log("Do while loop");
var i = 0;
do {
  console.log(a[i]);
  i++;
} while (i < a.length);

// End of Do while

// while loop
console.log("While loop");
while (i < a.length) {
  console.log(a[i]);
  i++;
}

// End of While loop

// Function
console.log("Function");
function sum(a, b) {
  var c = a + b;
  return c;
}
console.log(sum(5, 6));
var d = sum("habib", 6);
console.log(typeof d);

// End of Function

/*
 * যখনই নতুন একটা ডাটা ক্রিয়েট করা হচ্ছে, সেই ডাটা র টাইপ টা হচ্ছে primitive
 * যখন নতুন ডাটা ক্রিয়েট করা হবে না, reffer kore, সেইটা non-primitive
 */

console.log("non-primitive");

var x = [1, 2, 3, 4];
var y = x;
x[2] = "habib";
console.log(y);

console.log("Primitive");

var p = 10;
var q = p;
q = 5;
console.log(p);

console.log("difference between arguments and parameters");
function add(a, b) {
  // parameter -> func theke jegula receive kore
  return a + b;
}
console.log(add(4, 5)); // argument-> age call hoy-> func call krar somoy j data gula diye dei

function adds(c) {
  c[2] = "habib";
  console.log(c);
}

var d = [1, 2, 3, 4, 5];
adds(d);

console.log(d);

/*
    # interview questions

    1. javascript is a loosely typed language
    2. difference between primitive and non-primitive data types
        a. primitive: number, string,
        b. non-primitive: object, array or list, function
    3. difference between arguments and parameters
    4. explain pass by value and pass by reference
*/

/*
    1. list or array
    2. loop ( একই কাজ বার বার করা )
        a. for loop
        b. while loop
        c. do...while loop
    3. string হচ্ছে ক্যারেকটার এর মালা
    4. function
*/
