// function declaration ---- normal function

let name ="user 1" /*it globally scope declared */

function someFunc(){
    console.log("normal function value");
    return "someValue"
}
console.log(someFunc());


// function expression--- arrow function
const arrFunc=()=>"arr function"

console.log(arrFunc());

// main three difference 

// 1. return may or maynot given in arrow function if tow many lines may simplify or use return key word or for Normal function we use return 
normalFunc(5,7)

function normalFunc(a,b){
    let value = a + b;
    return value
}

console.log(arrowFunc(4,5));
// 

const personalData={
    name:"saravanan",
    batch:"guvi weekend",
    class:"guvi Fullstack Developer",
    getPersonName:function(){
        return this.name
    }
}