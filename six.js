var my_name = "habib";

function a() {
  var cnt = 0;

  console.log(my_name);

  function b() {
    console.log(cnt);
  }
  return b;
}

var myFunc = a();
console.log(myFunc);
myFunc();

// Outer function টা যেই execution context এ ছিলো,
// সেই execution context এর lexical scope এ যা যা ছিল,
// সব variable অথবা function কে inner function এ access করতে পারবে!
