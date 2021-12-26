// object
// Properties or member variable
// methods of object
// tamplate literals

var a = {};
var b = {
  name: "habib",
  trainOf: "Pondit",
  printPost() {
    console.log("Trainer");
  },
};

var c = [1, 2, 3, 4];
var d = [...c];
d[1] = 5;
console.log(c, d);

console.log(`a=> ${a}`);
console.log(b.name, b.trainOf);
b.printPost();

// rest operator

function printProducts(p1, p2, p3, ...rest) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(rest);
}

printProducts(1, 2, 3, 4, 5, 6);

// map, filter, forEach

const m = [1, 2, 3, 4];
for (let i = 0; i < m.length; i++) {
  const element = m[i];
  console.log(element);
}
console.log("for each");
function printArrayElement(num) {
  console.log(num);
}
m.forEach(printProducts);
console.log("Another");
m.forEach((m) => {
  console.log(m);
});

// m.forEach();

console.log("map");

const n = [1, 2, 3, 4, 5];
function printArrayElements(num, i) {
  //   const nameObj = {
  //     number: num,
  //     idx: i,
  //   };
  //   return nameObj;
  if (num <= 2) return true;
  else return false;
}
// const o = n.map(printArrayElements);
// const o = n.filter(printArrayElements);
const o = n.filter((num) => num <= 2);
console.log(o);

/**
 * class
 * class expression
 * object
 * prototyping, prototyping inheritance
 * constructor function and new keyword
 * garage collector
 * map, filter, forEach
 * bind, call, apply
 * promise
 * async ... await
 * spread operator
 * rest operator
 * for each
 */
