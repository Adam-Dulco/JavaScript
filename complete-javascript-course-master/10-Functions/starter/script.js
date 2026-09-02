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

const oneWord = function (str) {
  return str.replace(/ /g, ''.toLowerCase());
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

const divideNum = function (num) {
  return num / 2;
};

divideNum(7);

const transformer2 = function (num, fn) {
  console.log(`Original String: ${num}`);
  console.log(`With Num: ${fn(num)}`);
};

transformer2(9, divideNum);
