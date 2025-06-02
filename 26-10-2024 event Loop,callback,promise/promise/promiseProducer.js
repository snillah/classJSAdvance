console.log("Promise producer");

let promise1 = new Promise((res,rej)=>{
    if(true){
        res("your promise is resolved")
    }
    rej("your promise is not resolved")
})
console.log(promise1);

//consumer
promise1.then((data)=>{console.log(data)}).catch((err)=>{
    console.log(err);  
})

let promise2 = new Promise((res,rej)=>{
    if(true){
    setTimeout(()=>{
     return  rej("Resolved promise 2")
    },2000)
}
})
console.log(promise2);

promise2.then((data)=>{
    console.log(data);
})
.catch((err)=>console.log(err))
