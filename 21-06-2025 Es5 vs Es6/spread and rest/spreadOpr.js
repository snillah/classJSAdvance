
// spread operator and rest operator useing (...)
// collections => (individual values) -> spread opreator
// Individual Value => [Collections values] -> rest opreator
// Array
const fruitBasket = ["apple","orange","banana","gova"]

// spread operator
function showAllSpread(f1,f2,f3,f4){
    console.log("fruit1",f1);
    console.log("fruit2",f2);
    console.log("fruit3",f3);
    console.log("fruit4",f4);
}
console.log("without using spread");
showAllSpread(fruitBasket);

console.log("with using spread");
console.log("spread operator collection to Individuals");
showAllSpread(...fruitBasket);



// object
const personalData={
    name:"saravanan",
    batch:"guvi weekend",
    class:"guvi Fullstack Developer",
    getPersonName:function(){
        return this.name
    }
}
