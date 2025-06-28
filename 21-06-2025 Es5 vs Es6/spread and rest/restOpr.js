// rest Operator

function showAllRest(f1,f2,...fruits){
    console.log("rest operator  to Individuals");
    console.log("fruit1",f1);
    console.log("fruit2",f2);
    console.log("fruit3",fruits);
}

// this execute time
// empty calling
console.log("empty calling");
showAllRest()

// listt of number
console.log("list of numbbers");
showAllRest(1,2,3,4,5,6,7,8,9);

console.log("Array");
const fruitBasket = ["apple","orange","banana","gova"]
showAllRest(fruitBasket)

