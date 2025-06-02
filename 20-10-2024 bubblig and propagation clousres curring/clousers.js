const counter =document.getElementById('count')


const conutFunction = outerFunction();

// calling function
conutFunction()
conutFunction()

function outerFunction(){
    let count = 0;
    return function innerfunction(){
        count++;
        counter.innerHTML = count;
    }
}

// // curring concept
// outerFunction()()

// curring practiceing
function mathFunction(value){
    let sumValue = value ||0;
    return function addFunction(value1){
        sumValue +=value1;
        return function addfunction(value2){
            sumValue +=value2||0;
            return sumValue
        }
    }
}
console.log(mathFunction(3)(5)(6));

function sum(num1){
    console.log(num1);
    return function (num2){
        if(num2){
            console.log(num1+num2);
        }else{
            return function(){
                console.log(num1);
            }
        }
        return function(num3){
            if(num3){
                console.log(num1+num2+num3);
            }else{
                return function(){
                    console.log(num1+ num2);
                }
            }
        }
    };
}
sum(2)(1)();

// to avoid this Recursive

function sum1(num1){
    return function(num2){
        if(num2){
            return sum1(num1+num2);
        }
        return num1
    }
}
console.log(

    sum1(2)(3)(4)()
);
