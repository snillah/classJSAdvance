
function greeting(){
    sayHi()
    console.log("HI");   
}

function sayHi(){
    console.log("hi");
}

greeting()

function granishFood(){
    console.log("Food Granish");
}

function cookMainCource(ingredient){
    console.log(`step:2 cooking ${ingredient}`);
    granishFood();
    console.log("step:3 main course cooked");
    
}

function prepareMeal(){
console.log("Staring the meal Preparation");
cookMainCource("Pasta")
console.log("Meal Preparation Completed");
}

prepareMeal();
console.log("Kitchen is clean!");

console.log("1");

function subFunction(){
    console.log("sub-function 3");
}

function functionAct(){
    console.log("Main function 2");
    subFunction();
}

functionAct();

// if long time task  - it will block the call stack and once operation done then it will process

function longRunningTask(){
    let count =0;
    console.log("Long-time task start - block the call-stack",count);
    for(let j=0;j<109;j++){
        count++
    }
    console.log("Long Task done!",count);
}

function importantTask(){
    console.log("Important task");
}

longRunningTask();
importantTask();

console.log("before settimeout 1");
setTimeout(()=>{
    console.log("2 settime 2sec");
    console.log("Web API take a mins after finish it push to task queue finally call stack empty then event loop send finished task to call stack");
},2000);
setTimeout(() => {
    console.log("3 settime 0sec");
    console.log("Web API no mins push to task queue finally call stack empty then event loop send finished task to call stack");
}, 0);
console.log("4 After settimeout");
console.log("----------------------------------");

