// class Person {
//   constructor(first_name, last_name) {
//     this.first_name = first_name;
//     this.last_name = last_name;
//     this.name = first_name + " " + last_name;
//   }
//   printInfo() {
//     console.log(`${this.first_name} ${this.last_name}`);
//   }
// }

// class Man extends Person {
//   constructor(first_name, last_name) {
//     super(first_name, last_name);
//     this.eyes = eyes;
//   }
// }

// const person1 = new Person("Habibur", "Rahman");
// const person2 = new Person("Shanto", "Vai");
// person1.printInfo();
// person2.printInfo();

// const obj = {
//   name: "Cow1",
//   hands: 2,
//   eyes: 2,
// };

// console.log(person1);
// console.log(obj.name);

// this operator (this refers to current object)

// Promise->
// 1.pending
// 2.resolve
// 3.reject

function callback(resolve, reject) {
  // hit the api of youtube => 50 mb
  setTimeout(() => {
    const res = { data: [1, 2, 3, 4] };
    resolve(res);
  }, 10000);
}

const prms1 = new Promise(callback);

const successful = (res) => {
  console.log("haa paichi");
  console.log(res);
};
const error = (err) => {
  console.log("data painai");
  console.log(err);
};

prms1.then(successful).then(error);
