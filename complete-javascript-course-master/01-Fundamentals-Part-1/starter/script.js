/*========================*/
/*  Function Declaration  */
/*========================*/
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

/*=======================*/
/*  Function Expression  */
/*=======================*/
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

/*=======================*/
/*     Arrow Function    */
/*=======================*/

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Adam"));
// console.log(yearsUntilRetirement(1980, "Bob"));

/*====================================*/
/*     Functions Calling Functions    */
/*====================================*/

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Adam"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// // Takes the scores and calculates the average
// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// // Assigns the scores to the variables
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(23, 34, 27);

// // Calculates who is thw winner using the averages from calcAverage
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= avgKoalas * 2 ) {
//     console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };

// console.log(checkWinner(scoreDolphins, scoreKoalas));

/*==================*/
/*      ARRAYS      */
/*==================*/

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Adam";
// console.log(friends);

// friends[2].pop;

// console.log(friends);

//Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(years);

// console.log(calcAge(years[0]));
// console.log(calcAge(years[1]));
// console.log(calcAge(years[2]));
// console.log(calcAge(years[3]));
// console.log(calcAge(years[4]));

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// Add Elements

// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Adam");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);
// console.log(newLength);

// Remove Elements

// friends.pop();
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const firstPopped = friends.shift();
// console.log(firstPopped);
// console.log(friends);
// console.log(`Steven is in index position: ${friends.indexOf("Steven")}`);

// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

// const calcTip = bill => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

/*=================*/
/*     OBJECTS     */
/*=================*/

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonas = {
//   firstName: "jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// console.log(jonas.firstName);
// console.log(jonas["firstName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // const interestedIn = prompt(`What do you want to know about Jonas? Choose between in firstName, lastName, age, job, and friends`)

// // if(jonas[interestedIn]) {
// //   console.log(jonas[interestedIn])
// // } else {
// //   console.log('wrong request')
// // }

// jonas.location = "portugal";
// jonas["twitter"] = "@jonasschemt";
// console.log(jonas);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`,
// );

// const jonas = {
//   firstName: "jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// },

// calcAge: function () {
//   console.log(this);
//   return 2037 - this.birthYear;
// },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// // console.log(jonas["calcAge"](1991));

// console.log(jonas.getSummary());

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI(); // Creates new object properties of mark.bmi using 'this.bmi'
// john.calcBMI(); // Creates new object properties of john.bmi using 'this.bmi'

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`,
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`,
//   );
// }

/*=================*/
/*      LOOPS      */
/*=================*/

// console.log('Lifting weights repetition 1 🏋️‍♂️')
// console.log('Lifting weights repetition 2 🏋️‍♂️')
// console.log('Lifting weights repetition 3 🏋️‍♂️')
// console.log('Lifting weights repetition 4 🏋️‍♂️')
// console.log('Lifting weights repetition 5 🏋️‍♂️')
// console.log('Lifting weights repetition 6 🏋️‍♂️')
// console.log('Lifting weights repetition 7 🏋️‍♂️')
// console.log('Lifting weights repetition 8 🏋️‍♂️')
// console.log('Lifting weights repetition 9 🏋️‍♂️')
// console.log('Lifting weights repetition 10 🏋️‍♂️')

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

const jonasArray = [
  "Jonas",
  "Schemdtmann",
  2031 - 1991,
  "teacher",
  ["Michael, Peter, Steven"],
  true,
];

const types = [];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[4]);

for (let i = 0; i < jonasArray.length; i++) {
  // Reading from jonasArray
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array
  // types[i] = typeof jonasArray[i]
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  // ages[i] = 2037 - years[i];
  ages.push(2037 - years[i]);
}

  console.log(ages);
