console.log("one!");

console.log("Two!");

function logThree(){
    console.log("Three!");
}

function logThreeAndFour(){
    logThree();
    console.log("Four!");
}

logThreeAndFour();

// if long time task  
console.log("Long-time task");

function longRunningTask(){
    let count =0;
    for(let j=0;j<109;j++){
        count++
    }
    console.log("Long Task done!");
}

function importantTask(){
    console.log("Important task");
}

longRunningTask();
importantTask();

console.log("Using timer call back function facing event looping");
console.log("--------------------------------");

console.log("before settimeout 1");
console.log("before settimeout 2");
setTimeout(()=>{
    console.log("3 settime-2000");
    console.log("Web API take a mins after finish it push to task queue finally call stack empty then event loop send finished task to call stack");
},2000);
setTimeout(() => {
    console.log("4 settime-0");
    console.log("Web API no mins push to task queue finally call stack empty then event loop send finished task to call stack");
}, 0);
console.log("After settimeout 5");
console.log("After settimeout 6");
console.log("After settimeout 7");
console.log("----------------------------------");




