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

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

console.log(years);

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[2]));
console.log(calcAge(years[3]));
console.log(calcAge(years[4]));

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
