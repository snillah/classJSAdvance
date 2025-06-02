const  userData =[
    {
        userName:"user1",
        password:"Password1@123",
        role:"worker"
    },
    {
        userName:"user2",
        password:"Password2@123",
        role:"admin"
    }
]

function setLocalStorage(){
    localStorage.setItem("userdata",JSON.stringify(userData))
}
setLocalStorage()

const getData= ()=>{
    return localStorage.getItem("userdata")
}

let mainConatiner = document.getElementById('container');
const formContainer =document.createElement('div');
formContainer.classList.add("form-container");

formContainer.innerHTML = `
<input type="text" name="" id="old-text" placeholder="Enter username" />
<input type="text" name="" id="old-password" placeholder="Enter password"/>
<button type="button" id="old-login-btn">login</button>
<span id="msg"></span>
`

mainConatiner.append(formContainer)

document.getElementById('old-login-btn').addEventListener('click',()=>{
    const allUserData = JSON.parse(getData())
    console.log(allUserData);
    let user
    let userName = document.getElementById('old-text').value;
    let userPassword = document.getElementById('old-password').value;
    let msg =document.getElementById('msg');
    
    console.log("given details",userName,userPassword);
   
    if(userName && userPassword){
        user = allUserData.find((user)=>user.userName === userName)
        console.log("data",user);
        if(userName !== user.userName){
            msg.innerHTML ="No User Data"
            return
        }
        if(userPassword !== user.password){
            msg.innerHTML ="User credential Incorrect"
            console.log(userPassword,user.password);   
            return
        }
        msg.innerHTML =""
        localStorage.setItem("role",user.role)
        
        }else{
    msg.innerHTML = "Please fill all the details"
    }
    


})