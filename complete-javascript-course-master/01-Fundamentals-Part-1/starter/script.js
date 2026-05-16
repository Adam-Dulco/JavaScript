/*========================*/
/*  Function Declaration  */
/*========================*/
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

/*=======================*/
/*  Function Expression  */
/*=======================*/
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

/*=======================*/
/*     Arrow Function    */
/*=======================*/

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Adam'));
console.log(yearsUntilRetirement(1980, 'Bob'));

/*====================================*/
/*     Functions Calling Functions    */
/*====================================*/
