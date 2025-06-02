// event bubbling and propagation

const parent = document.getElementById('parent');
const child = document.getElementById('child'); 


const parent1 = document.getElementById('parent1');
const child1 = document.getElementById('child1'); 

//event bubbling its done in naturally
parent.addEventListener('click',()=>{
    alert("parent clicked")
});
child.addEventListener("click",()=>{
    alert("child clicked");
})

// event propagation
parent.addEventListener('click',()=>{
    alert("parent clicked")
});
child.addEventListener("click",()=>{
    event.stopPropagation
    alert("child clicked");
})