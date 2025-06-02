let task1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Resolved promise 1")
    },2000)
})

let task2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Resolved promise 2")
    },3000)
})


let task3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Resolved promise 3")
    },4000)
})

Promise.all([task1,task2,task3])
.then(data=>console.log(data))
.catch((err)=>console.log(err));

function markTask(input){

    const marksTask = new Promise((res,rej)=>{
        
        setTimeout(()=>{
                if(input>80){
                    res("Eligible for Interview")
                }     
        },2000)
        rej("Not Eligible")
    })
    return marksTask
}

markTask(90).then((data)=>console.log(data)).catch(err=>console.log(err))

