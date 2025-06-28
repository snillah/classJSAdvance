


// file reading
// database querys
// Network calls
// DOM
// promise


console.log("start 1");

setTimeout(function greetings() {
    console.log("TimeOut 2 seconds");
}, 2000);

setTimeout(() => {
    console.log("TimeOut 0 seconds");
}, 0);

let count =0

const intervaild = setInterval(function tick() {
    count ++
    console.log(`counting ${count}`);
    if(count >=3){
        clearInterval(intervaild);
        console.log("interval Cleared");
    }
}, 700);

setImmediate(()=>{
    console.log("Immediate");
})
