

fetch("https://restcountries.com/v3.1/all")
.then((result)=>result.json())
.then((data)=>{
    if(data.message){
        console.log("Error message:",data.message);
    }else{
        data.map((country,index)=>{
            console.log(country.name.common);
            
            createCardComponent(country)
        })
    }
})
.catch((err)=>console.log(err))

function createCardComponent(country){
    document.body.innerHTML +=`
        <div class="container">
        <img id="flag" src="${country.flag.png}" alt="flagImage"/>
        <div class="information">
        <h2>${country.name.common}</h2>
        <p><span>Population :</span>${country.population}</p>
        <p><span>Capital :</span>${country.capital[0]}</p>
        <p><span>Region :</span>${country.region}</p>
        </div>
        </div>
    ` 
}






