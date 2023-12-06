// From 3dexperience Hackathon.pdf Page 11 Block 1
let data = [
  { Date: "1/1/21", R1: "95", R2: "94", R3: "92", R4: "94" },
  { Date: "1/2/21", R1: "95", R2: "95", R3: "92", R4: "94" },
  { Date: "1/3/21", R1: "95", R2: "94", R3: "92", R4: "94" },
  { Date: "1/4/21", R1: "95", R2: "95", R3: "92", R4: "95" },
  { Date: "1/5/21", R1: "94", R2: "94", R3: "91", R4: "93" },
  { Date: "1/6/21", R1: "95", R2: "95", R3: "92", R4: "95" },
  { Date: "1/7/21", R1: "95", R2: "95", R3: "92", R4: "95" },
  { Date: "1/8/21", R1: "94", R2: "93", R3: "91", R4: "93" },
  { Date: "1/9/21", R1: "95", R2: "95", R3: "92", R4: "95" },
  { Date: "1/10/21", R1: "95", R2: "95", R3: "93", R4: "95" },
];
console.table(JSON.stringify(data));
console.log(data[0]);
console.log(data[0]["Date"]);
console.log(Object.keys(data[0]));
console.log(Object.values(data[0]));
console.log(data.map((a) => a["Date"]));
console.log(data.find((a) => a["R3"] >= "93"));
console.log(data.reduce((sum, a) => sum + parseInt(a["R1"]), 0));
console.log(data.filter((a) => a["R4"] > "94"));

// THe next two are the same, but since the first is a one liner the return is not needed...
// console.log(data.map((a) => a["Date"]));

// console.log(
//   data.map((a) => {
//     return a["Date"];
//   })
// );

// console.log(
//   data.map((a) => {
//     return a["Date"] + " Date";
//   })
// );

//console.log(data.find((a) => a["R3"] >= "93"));
//console.log(data.reduce((sum, a) => sum + parseInt(a["R1"]), 0));

// console.log(
//   data.reduce((sum, a) => {
//     sum + parseInt(a["R1"]);
//   }, 0)
// );

// console.log(data.filter((a) => a["R4"] > "94"));
