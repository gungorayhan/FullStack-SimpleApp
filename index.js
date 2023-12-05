const tasks=[]; //data

function addTask(){
    //frontend
    const input = document.getElementById("taskInput"); 
    const value= input.value.trim()

    //backend 
    if(value){ 
        tasks.push({text:value,done:false})
        input.value="";
        displayTasks();
    }
}


function displayTasks(){
    //frontend
    const taskList = document.getElementById("taskList"); 
    taskList.innerHTML="";

    //backend
    tasks.forEach((task,index) => {

        const li = document.createElement('li');//frontend
        li.textContent=task.text;
        li.style.textDecoration=task.done ? "line-through" : "none";

        li.addEventListener("click",()=>{
            toggleTask(index); //backend
        })

        const deleteButton = document.createElement('button'); //frontend
        deleteButton.textContent="Sil";
        deleteButton.addEventListener("click",()=>{
            deleteTask(index);//backend
        })

        li.appendChild(deleteButton);
        taskList.appendChild(li);

    });
}

function toggleTask(index) { //backend
    tasks[index].done = !tasks[index].done;
    displayTasks()
}

function deleteTask(index) { //backend
    tasks.splice(index,1);
    displayTasks()
}

displayTasks() //app