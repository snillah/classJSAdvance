function start(callback){
    console.log("Task Activation for E-commerce");
    callback();
}

function task1(callback){
    console.log("Create order");
    console.log("=>Task one Completed");
    callback();
}
function task2(callback){
    console.log("show order Summary");
    console.log("=>Task two Completed");
    callback();
}
function task3(callback){
    setTimeout(()=>{
        console.log("show Payment gateway and succefully done");
        console.log("=>Task three Completed");
        callback();
    },2000)
}
function task4(callback){
    setTimeout(()=>{
        console.log("show deleivery status");
        console.log("=>Task four Completed");
        callback();
    },3000)
}

start(()=>{
    task1(()=>{
        task2(()=>{
            task3(()=>{
                task4(()=>{console.log("All task as completed");
                })
            })
        })
    })
})