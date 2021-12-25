var my_name = "habib";

function a() {
  var cnt = 0;

  console.log(my_name);

  function b() {
    console.log(cnt);
    cnt++;
  }
  return b;
}

var myFunc = a();
console.log(myFunc);
myFunc();
myFunc();
myFunc();
myFunc();

var a = 10;

function mostOuter() {
  function outer(student_name) {
    var school_name = "asdfg";
    function inner() {
      console.log(student_name);
      console.log(school_name);
    }
    return inner;
  }
  return outer;
}

var b = mostOuter();
var c = b("habib");
c();

var ac = 10;

function outer() {
  var bc = function () {
    console.log(names);
  };
  return bc;
  var names = "jahid";
}
var d = outer();
d();

/**
 * outer function থেকে innner function return করি,
 *  তখন javascript engine execusion শেষ হওয়ার পরও যে ফাংশঙ্গুলো inner function এ ইউজ করছি,
 * সেগুলো বা সেই data গুলো রেখে দেয়,এটাই closure.
 * inner function এ আমি কোন কোন data র access পাবো?
 * ans : outer function এর lexical scope এ যেগুলা থাকবে, সেগুলোর access পাবো
 */
