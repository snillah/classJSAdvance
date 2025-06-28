function start(){
  return new Promise((res, rej)=>{
      res("Starts the Project")
  })
}

function first(){
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      res("Resolved and good performance first operation")
    },2000)
  })
}
function second(boo){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      if(boo){
        res("getting Order and Payment Successful")
      }else{
        rej("payment faild ")
      }
    },2500)
  })
}
function faildPayment(){
  return new Promise((res,rej)=>{
    res("search Goods")
  })
}
function thrid(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res("Delivery Status")
    },4000)
  })
}
function completed(){
  return new Promise((res,rej)=>{
    res("Successfully completed")
  })
}

start()
.then((data)=>{
  console.log(data);
  return first();
})
.then((data)=>{
  console.log(data);
  return second(true)
})
.then((data)=>{
  console.log(data);
  return thrid()
}).catch((err)=>{
  console.log(err)
  return faildPayment()
})
.then((data)=>{
  console.log(data);
  return completed()
})
// .catch((err)=>{
//   console.log(err);
// })
.then((data)=>{
  console.log(data);
})