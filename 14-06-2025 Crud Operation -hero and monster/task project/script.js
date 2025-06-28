const task = [
    {id:0,title:"Title",subTitle:"sub-title",desc:"Description",completed:false}
]

let taskForm = document.getElementById('task-form')
let taskList =document.getElementById("list");


// create
taskForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    let title = document.getElementById('task-name').value;
    let subTitle = document.getElementById('task-subname').value
    let desc = document.getElementById('description').value
    
    const newTask = {id:Date.now(),title,subTitle,desc,completed:false};
    console.log(newTask);
    let checkTask = alreadyExist(newTask);
    addNewtask(checkTask)
    taskForm.reset();
    })

    function addNewtask(newtask){
        task.push(newtask);
        fetchTask();
    }
// read
function renderTask(task){
    const taskElement = document.createElement('li')
    taskElement.innerHTML = `
        <div class="list-content">
        <div>
        <p>${task.title}</p>
        <span>${task.subTitle}-<span><span>${task.desc}
        </div>
        <div class="action">
        <button onClick(${task.id})>Edit</button>
        <button onClick="deleteTask(${task.id})">Delete</button>
        </div>
        </div>
    `
    taskList.appendChild(taskElement)
}

// update
    function editTask(id){
        const selected = task.find((objvalue)=>objvalue.id === id);
       document.getElementById('task-name').value = selected.title
       document.getElementById('task-subname').value = selected.subTitle
       document.getElementById('description').value = selected.desc
        deleteTask(id)
        document.getElementById
    }

// delete

    function deleteTask(id){
        const taskObject = task.find((task)=>task.id === id);
        console.log(taskObject);
        // re-assign
        task = filterTask = task.filter((obj)=>obj.id != id)
        fetchTask();
    }

// Example
function fetchTask(){
    taskList.innerHTML ="";
    task.forEach((listValue)=>{
        renderTask(listValue)
    })
}

fetchTask();

// check already exits

function alreadyExist(t){
    let alreadyExist = task.find((tas)=>tas.title != t.title)
    
    if(alreadyExist){
        console.log("already",alreadyExist);
        return null
    }else{
        return t
    }
}