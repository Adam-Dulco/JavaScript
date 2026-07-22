let day = 0;

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    day += 1;
    if (day === 1) {
      console.log(` The temperature will be ${arr[i]}°C in ${day} day...`);
    } else {
      console.log(` The temperature will be ${arr[i]}°C in ${day} days...`);
    }
  }
};

printForecast(["19", "20", "32", "50"]);
