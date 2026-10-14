'use strict';

// Constructor functions

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1989);
console.log(jonas);

// 1. New object {} is created
// 2. function is called, this = new object {}
// 3. object {} is linked to prototype
// 4. function automatically returns the object {}

const sheila = new Person('Sheila', 2001);
const jack = new Person('Jack', 2001);

console.log(matilda, jack);

console.log(jonas instanceof Person);
