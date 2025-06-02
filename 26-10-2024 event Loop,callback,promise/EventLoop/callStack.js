
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
