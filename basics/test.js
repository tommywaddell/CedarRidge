// From 3dexperience Hackathon.pdf Page 7 Block 1
// var a = 10;
// console.log(a + 10); // 20
// a = "10";
// console.log(a + 10); // 1010
// console.log(parseInt(a) + 10); //20

// From 3dexperience Hackathon.pdf Page 7 Block 2
// var a = 10;
// if (a > 5) {
//   let a = 3;
//   console.log(`The value of a = ${a}`); //3
//   var b = 5;
//   let c = 20;
// }
// console.log(`The value of a = ${a}`); //10
// console.log(`The value of b = ${b}`); //5
// console.log(`The value of c = ${c}`); //error: not defined

// From 3dexperience Hackathon.pdf Page 7 Block 3
// var add = function (a, b) {
//   return a + b;
// };
// console.log(add(3, 4)); //7
// console.log(add("Hello ", "World!")); // Hello World!

// From 3dexperience Hackathon.pdf Page 8 Block 1
// var x = 10;
// function square() {
//   console.log(x * x);
// }
// function setAndSquare() {
//   var x = 5;
//   square();
// }
// square();
// setAndSquare();

// From 3dexperience Hackathon.pdf Page 8 Block 2
function createAdder(a) {
  let newFn = function (b) {
    return a + b;
  };
  return newFn;
}
fnA = createAdder(2);
console.log(fnA(3));
fnB = createAdder(50);
console.log(fnB(3));

// From 3dexperience Hackathon.pdf Page 8 Block 3
// function square(i) {
//   return i * i;
// }
// let data = [1, 3, 18, 2, 7, 3, 2, 3];
// data.map(square);
// console.log(`The array is ${data.map(square)}`);
// console.log(`The array is ${data.map((i) => i * i)}`); //arrow function
// console.log(`The array is ${data.sort((a, b) => a - b).map((i) => i * i)}`); //chain functions
