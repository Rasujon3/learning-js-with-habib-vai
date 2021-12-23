

// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
const number = 4;

let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


// var inch = window.prompt("Enter your number: ");

// convertToFeet = inch * 0.0833;

// console.log(convertToFeet)

// function inchToFeet(inch) {
//     var feet = inch / 12;
//     return feet;
// }

// var senior = [156, 144, 72];

// var Feet = inchToFeet(senior[1]);
// console.log(Feet);

// var fac = 4;
// var result = 0;
// for (let i = 1; i <= fac; i++) {
//     var result = i * result;
// }
// console.log(result);

// function factorial(n) {
//     if (n == 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// var result = factorial(4);
// console.log(result);


// var a = [1, 2, 3, 4];

// var b = a;

// b[2] = 'habib';

// console.log(b);

// var x = 10;

// var y = x;

// y = 5;

// console.log(x);

// function add(a) {
//     a[2] = 'habib';
//     console.log(a)
// }

// var b = [1, 2, 3, 4, 5];
// add(b);

// console.log(b);

// // Do While

// var i = 0;
// do {
//     console.log(a[i]);
//     i++;
// }
// while (i < a.lenght());

// End of Do while

// while loop

// var a = [1, 2, 3, 'habib', ['a', 'b', 5]];

// let i = 0;
// while (i < 10) {
//     console.log(a[i]);
//     i++;
// }

// End of While loop 

/*
    * যখনই নতুন একটা ডাটা ক্রিয়েট করা হচ্ছে, সেই ডাটা র টাইপ টা হচ্ছে primitive
    * যখন নতুন ডাটা ক্রিয়েট করা হবে না, সেইটা non-primitive
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
    1. run javascript in html file on browser
    2. output
    3. variable ( যে কোনো কিছু ধারণ করে )
    4. condition
        # comparison operator
            1. is greater than - >
            2. is less than - <
            3. equal - ==

        # logical operator
            1. and - &&
            2. or - ||
            3. not - !
*/