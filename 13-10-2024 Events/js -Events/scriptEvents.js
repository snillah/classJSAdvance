
let btn = document.getElementById("btn");

let eventOutput = document.getElementById("pOutput")
let count =0;

btn.addEventListener("click",()=>{
    count++;
    eventOutput.innerText = `Button clicked ${count}`
});
// -------------------------------------------------------------
let btn1 = document.getElementById("btn1")
let eventOutput1 = document.getElementById("pOutput1")

btn1.addEventListener("mouseover",()=>{
eventOutput1.innerText = "Mouse Hovered"
eventOutput1.style.color ="red";
eventOutput1.style.backgroundColor ="Yellow";
})

// Input Element-------------------------------------------------------------

let inputVal1 = document.getElementById("input1")
let eventOutput2 = document.getElementById("pOutput2")

inputVal1.addEventListener("input", ()=>{
eventOutput2.innerText =inputVal1.value
});

// KEY Press Element-------------------------------------------------------------

let eventOutput3 = document.getElementById("pOutput3")
let eventOutput4 = document.getElementById("pOutput4")

document.addEventListener('keypress', (event)=>{
eventOutput3.innerText = `you entered ${event.key}`;
    if(event.key === "Enter"){
        eventOutput4.innerHTML = `you Entered ${event.key}`;
    }
});