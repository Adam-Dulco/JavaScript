'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reassigning outer scope's variable.
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you are a millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Adam';
// calcAge(1991);

// // console.log(age)
// // printAge()

// HOISTING

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Adam';
// let job = 'teacher';
// const year = 1991;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addDecl(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example

// console.log(!numProducts);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log( x === window.x)
// console.log( x === window.y)
// console.log( x === window.x)

// console.log(myName)

// let myName = 'Adam'

// --------------- 'this' Keyword--------------

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   //   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   //   console.log(this);
// };

// calcAgeArrow(1980);

// const jonas = {
//   name: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     console.log(this.name);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   name: 'Matilda',
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// var firstName = 'Geoff';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // SOLUTION 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     // SOLUTION 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//       // console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   // Arrow function USED as a method does NOT get 'this' from the jonas object.
//   // It uses 'this' from the surrounding scope (often window in a browser script).
//   arrowGreet: () => {
//     console.log(`Hey ${this.firstName}`);
//     console.log(this);
//   },

//   // Regular function used as a method gets 'this' from the object calling it.
//   // Here, jonas.greet() makes 'this' equal to jonas.
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//     console.log(this);
//   },
// };

// jonas.arrowGreet();
// jonas.greet();
// jonas.calcAge();

// ARGUMENTS KEYWORD

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  a + b;
  console.log(addArrow);
  return a + b;
};

addArrow(2, 5, 8);
