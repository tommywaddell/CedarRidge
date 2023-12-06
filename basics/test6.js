// From 3dexperience Hackathon.pdf Page 17 Block 1
function timeoutPromise(message, interval) {
  return new Promise((resolve, reject) => {
    if (message === "" || typeof message !== "string") {
      reject("Message is empty or not a string");
    } else if (interval < 0 || typeof interval !== "number") {
      reject("Interval is negative or not a number");
    } else {
      setTimeout(function () {
        resolve(message);
      }, interval);
    }
  });
}

// in your node js console   set NODE_TLS_REJECT_UNAUTHORIZED=0  to fix https cert issue
// Asynchronous Example
// console.log("Hello World 3");
let url = "https://www.google.com";

// From 3dexperience Hackathon.pdf Page 17 Block 2
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    //Process the json
  })
  .catch(function (err) {
    console.log("Fetch problem: " + err.message);
  });

// in your node js console   set NODE_TLS_REJECT_UNAUTHORIZED=0  to fix https cert issue
// fetch("https://www.google.com").then((res) => {
//   console.log(res.status);
//   //return res.text();
// });
