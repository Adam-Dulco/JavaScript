const favourite = Number(prompt("What is your favourite number?"));

console.log(`At the moment ${favourite} is a ${typeof favourite}`);
console.log(favourite);

if (favourite === 23) {
  console.log("Cool, 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also an amazing number");
} else if (favourite === 9) {
  console.log("9 is also an amazing number");
} else {
  console.log("What you entered is either not a number or not 23 or 7 or 9");
}

if (favourite !== 23) {
  console.log("Why not 23?");
} else console.log("ahh ok it was 23");
