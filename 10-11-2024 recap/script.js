const logger =(params)=>{
    console.log(params);
}

logger("promise all seleted")


let promise1 = new Promise((res,rej)=>{
    res("resolved promise 1")
});

let promise2 = new Promise((res,rej)=>{
    
    rej("Rejected promise 2")
})

let promise3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Resolved promise 3")
    },2000)
})

console.log(promise2);

Promise.all(([promise1,promise2,promise3]))
.then((data)=>{
    console.log("All",data);
})
.catch((err)=>{
    console.log("err promise.all",err);
})
// allsettled
Promise.allSettled([promise1,promise2,promise3])
.then((data)=>{
    console.log("allSettled",data);
})
.catch((err)=>{
    console.log("allSettled",err);
})
// race
Promise.race(([promise1,promise2,promise3]))
.then((data)=>{
    console.log("Race",data);
})
.catch((err)=>{
    console.log("error race",err);
    
})