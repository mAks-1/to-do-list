let tasksArea = document.querySelector(".addedTasks");
let btn = document.querySelector(".btnImg");
let checker = document.querySelector(".addNewTask");
let allTasks = [];

btn.addEventListener("click", addTask);
document.querySelector(".deleteTask").addEventListener("click", deleteTask);
document.querySelector(".showDoneTasks").addEventListener("click", showNotDoneTasks);
document.querySelector(".showAllTasks").addEventListener("click", showAllTasks);

function addTask(){
    if(checker.value != ''){
        let eachTask = new Task(checker.value);
        eachTask.createTask(tasksArea);
        checker.value = '';
    }else{
        alert('Введите имя задачи');
    }
}

function showAllTasks(){
    for(const elem of allTasks){
        if(elem.classList.contains("completed") == false){
            elem.style.display = 'flex';
        }
    }
}

function showNotDoneTasks(){
    for(const elem of allTasks){
        if(elem.classList.contains("completed") == false){
            elem.style.display = 'none';
        }
    }
}

function deleteTask(){
    for(const elem of allTasks){
        if(elem.classList.contains("completed")){
            elem.remove();
        }
    }
}

class Task{
    constructor(text) {
        this.isDone = false;
        this.text = text;
        this.div = null;
    }

    createTask(task){
        this.div = document.createElement("div");
        this.div.classList.add("task");

        let p = document.createElement("p");
        p.innerHTML = this.text;

        let input = document.createElement("input");
        input.type = "checkbox";

        this.div.append(input);
        this.div.append(p);

        if(this.isDone){
            this.div.classList.add("completed");
            input.checked = true;
        }
        task.append(this.div);
        allTasks.push(this.div);
        input.addEventListener("click", this.changer.bind(this));
    }

    changer(task){
        this.div.classList.toggle("completed");
        this.isDone = !this.isDone;
    }
}