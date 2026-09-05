'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers,
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const flightCount = 9;
// const adam = {
//   name: 'Adam Dulc',
//   passport: 24739479284,
//   certificates: 12,
// };

// const checkIn = function (flightNum, passenger, flightCount) {
//   flightNum = 'LH999';
//   flightCount = 7;
//   passenger.name = 'Mr. ' + passenger.name;
//   passenger.certificates = 5;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };
// checkIn(flight, adam, flightCount);
// console.log(flight);
// console.log(adam);
// console.log(flightCount);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = adam;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random()) * 10000000000;
//   console.log(person.passport);
// };

// newPassport(adam);
// checkIn(flight, adam);

// const oneWord = function (str) {
//   return str.replace(/ /g, ''.toLowerCase());
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const divideNum = function (num) {
//   return num / 2;
// };

// divideNum(7);

// const transformer2 = function (num, fn) {
//   console.log(`Original String: ${num}`);
//   console.log(`With Num: ${fn(num)}`);
// };

// transformer2(9, divideNum);

// Functions returning new functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Adam');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// // Arrow function transformation challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Adam');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function(flightNum) {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     console.log(this);
//   },
// };

// lufthansa.book(123, 'Adam');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, 'Sarah Williams');

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 321, 'Graham Simon');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Henry Cooper');
// console.log(swiss);

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind Method
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Adam');
// bookEW23('Martha Cooper');

// // With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// // lufthansa.buyPlane()

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial Application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// const returnVAT = function (rate) {
//   return function (value) {
//     console.log(`${value}` + `${value}` * `${rate}`);
//   };
// };

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// CHALLENGE 1 - My attempt -------------------
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer: function () {
//     const answer = Number(
//       prompt(
//         `What is your favourite programming language?
//         \n0: JavaScript
//         \n1: Python
//         \n2: Rust
//         \n3: C++
//         \n(Write option number)`,
//       ),
//     );
//     if (Number.isInteger(answer) && answer >= 0 && answer <= 3) {
//       // poll.answers[answer] = poll.answers[answer] + 1;
//       this.answers[answer]++;
//       // console.log(poll.answers);
//     } else {
//       alert(
//         `${answer} is an invalid number. Please select an integer number between 0 and 3, corresponding to your favourite programming language.`,
//       );
//     }
//     this.displayResults();
//   },
//   displayResults: function (type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// CHALLENGE 1 - Jonas -------------------
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer: function () {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`,
//       ),
//     );

//     console.log(answer);

//     //Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// // poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// // BONUS TEST DATA 1: [5, 2, 3]
// // BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate)

// // Arrow function Version of IIFE
// (() => console.log('This will ALSO never run again'))();

// {
//   var notPrivate = 46;
//   const isPrivate = 23;
// }

// console.log(notPrivate);
// console.log(isPrivate);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
