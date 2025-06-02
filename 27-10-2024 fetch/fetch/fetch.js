
// fetch("https://restcountries.com/v3.1/all")
// .then((result)=>result.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))


async function getData(){
    try{
        let result =  await fetch("https://restcountries.com/v3.1/all")
        let data = await result.json();
        console.log("Result",data);
        
    }catch(error){
        console.log("error on data received", error);
    }
}

getData();