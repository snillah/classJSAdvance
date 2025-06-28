// Immediate
setImmediate(() => {
  console.log("Immediate");
});

// setTimeout
setTimeout(() => console.log("setTimeout : 0sec"), 0);
setTimeout(() => console.log("setTimeout : 2sec"), 2000);
setTimeout(() => Promise.resolve().then(()=>console.log("setTimeout inside Promise : 0sec")), 0);

// setInterval
let count = 0;
const intervaild = setInterval(function tick() {
  count++;
  console.log(`Interval counts ${count}`);
  if (count >= 3) {
    clearInterval(intervaild);
    console.log("interval Cleared");
  }
}, 700);

// queueMicro
queueMicrotask(() => {
  console.log("microTask 1");
  queueMicrotask(() => console.log("MicroTask 2"));
});

// Promise
Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() =>
  setTimeout(() => console.log("Promise 2 inside setTimeout: 1sec"), 1000)
);
Promise.resolve().then(()=>Promise.resolve().then(()=>console.log("Promise 3 inside Promise: 1sec")))

// process.nextTick
process.nextTick(() => console.log("process.nexttick"));
