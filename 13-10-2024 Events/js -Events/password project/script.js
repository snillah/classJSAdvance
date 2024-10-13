const passwordForm =document.getElementById('form1')
const intputPassword  = document.getElementById("inputPassword");
const btn = document.getElementById("btn");
const confirmPassword  = document.getElementById("inputPassword1");
const confPara = document.getElementById("conf-para");
const submit = document.getElementById("btn1");
let isValue = 0;

function stateToggle(){
    isValue = !isValue
}

btn.addEventListener("click",()=>{
    stateToggle()
    console.log(isValue);
    isValue ? (btn.innerHTML ="Hide") : (btn.innerHTML ="Show")
    isValue ? (intputPassword.type="text") :(intputPassword.type ="password")
});

function matchPasswordLogic(){
            confPara.innerText="The Password Matched"
            confPara.style.color ="green"
}
function nonMatchPasswordLogic(){
            confPara.innerText="The Password Not Matched"
            confPara.style.color ="red"
}


confirmPassword.addEventListener('input',()=>{
    if(confirmPassword.value !== ""){
        if(intputPassword.value === confirmPassword.value){

            // confPara.innerText="The Password Matched"
            // confPara.style.color ="green"
            matchPasswordLogic();
            btn1.disabled = false;
        }else{
            // confPara.innerText="The Password Not Matched"
            // confPara.style.color ="red"
            nonMatchPasswordLogic();
            btn1.disabled = true;
        }
    }
})

passwordForm.addEventListener("keydown",(event)=>{
    if(btn1.disabled === false){
    if(event.key === "Enter"){
        alert("Confirm Befored click")
        console.log("btn", btn1.value); 
    }
        btn1.value =1;
        console.log("btn", btn1.value);
    }
});