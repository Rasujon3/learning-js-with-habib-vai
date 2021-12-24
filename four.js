// function statement : function decleare kori etai function statement
function getName() {
  return "Pondit";
}

// function expression : function k variable e store kore rakhle take fe bole

var getMyName = function name() {
  return "Habib";
};

console.log(getName());

console.log(getMyName());

// anonymous function
var getMyNames = function (myName) {
  var a = myName;
  return a;
};
console.log(getMyNames("habib"));

(function (name) {
  //   console.log("rafique");
  console.log(name);
})("sujon");

// named function expression
var getMyNames = function names(myName) {
  var a = myName;
  return a;
};
console.log(getMyNames("habib"));

// first class functions or higher order function
function getFunc(name) {
  function print() {
    console.log(name);
  }
  return print;
}
var ff = getFunc("Ikramul vai");
var ff = getFunc(function () {
  // this is call back function
  console.log("ami onk kichu bujhi");
});
var gg = getFunc();

console.log(ff);
ff();
// gg();

// arrow functions
var printUniName = (name) => {
  console.log(name);
};

printUniName("SU");

/*
    # interview questions
        function statement:vlue hisebe function body ta bose jabe

        function expression:type-error

        function declaration

        anonymous function:je function er nam nai

        named function expression: function er nam thakbe

        difference between parameters & arguments

        first class functions

        arrow functions

        higher order function: first class func e hof

        call back function

*/
