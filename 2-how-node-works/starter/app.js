// Promise.resolve().then(() => console.log("promise1 resolved"));

const { nextTick } = require("process");

// Promise.resolve().then(() => console.log("promise2 resolved"));
setTimeout(() => {
  console.log("set timeout3");
  Promise.resolve().then(() => console.log("inner promise3 resolved"));
  setTimeout(() => {
    console.log("inner set timeout5");
  }, 0);
  process.nextTick(() => console.log("nextTick"));
}, 0);
setTimeout(() => {
  console.log("set timeout4");
  setImmediate(() => {
    console.log("inner set immediate");
  });
}, 0);
// setTimeout(() => console.log("set timeout1"), 0);
// setTimeout(() => console.log("set timeout2"), 0);
// Promise.resolve().then(() => console.log("promise4 resolved"));
// Promise.resolve().then(() => {
//   console.log("promise5 resolved");
//   Promise.resolve().then(() => console.log("inner promise6 resolved"));
// });
// Promise.resolve().then(() => console.log("promise7 resolved"));
