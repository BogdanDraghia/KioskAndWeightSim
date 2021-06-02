const { worker } = require("worker_threads");

let scale = 0;

Math.random();
let i = 0;
// from seconds to ms
let weight = 0;
let start = false;
let maxWeight = 40500;
let interval = 400;
let upStable = 0;
let downStable = 0;

let stops = 3;

let time = 0;
let sum = 0;
let tmp = 0;
const startInterval = async () => {
  let firstinterval = setInterval(function () {
    sum = sum + weight;
    weight = Math.floor(Math.random() * 591) * 10;

    if (weight + sum > maxWeight) {
      while (sum !== maxWeight) {
        maxRandom = (maxWeight - sum) / 10;
        weightAdd = Math.floor(Math.random() * maxRandom) * 10;
        if (weightAdd + 100 + sum > maxWeight) {
          sum = maxWeight;
        } else {
          sum = sum + weightAdd;
        }
        if (sum == maxWeight) {
          clearInterval(firstinterval);
        }
      }
    }

    console.log(weight + " --- " + sum);
  }, interval);
  return console.log("stop");
};

startInterval();
if (time === 1) {
  startInterval();
}
