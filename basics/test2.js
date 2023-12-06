// From 3dexperience Hackathon.pdf Page 10 Block 1
function mean(data) {
  let sum = 0.0;
  data.forEach((bar) => {
    sum += parseFloat(bar);
  });
  let avg = sum / data.length;
  return avg;
}
function sd(values) {
  var avg = mean(values);
  var squareDiffs = values.map((value) => {
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });
  var avgSquareDiff = mean(squareDiffs);
  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}
let data = [56.3, 93.2, 11, 76.5, 119, 88.5, 23, 95.6];
console.log(`The mean of array [${data}] is ${mean(data)}`);
console.log(`The sd of array [${data}] is ${sd(data)}`);
