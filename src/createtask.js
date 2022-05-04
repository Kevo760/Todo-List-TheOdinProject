import { taskModal } from "./taskmodal";
import { editTaskModal } from "./editTaskModal";

function createTask(name, date, descript, priority, complete = 'false') {
    return {name, date, descript, priority, complete,
         completeTask() {
             this.complete = 'true';
         },
         uncompleteTask() {
             this.complete = 'false';
         }
 }
 };


 function taskUI(array, project, task) {
     const notebox = document.createElement('div');
     notebox.classList.add('notebox');

     const deleteTask = document.createElement('span');
     deleteTask.classList.add('delete-task');
     deleteTask.innerText = '+';
     deleteTask.addEventListener('click', function() {
        // finds index of the project
        const findProjectIndex = array.findIndex(e => e[0] == project);
        // finds the index of the task within the project array based on name
        const findTaskIndex = array[findProjectIndex].findIndex(e => e.name == task.name);
        // removes the task from the project
        array[findProjectIndex].splice(findTaskIndex, 1);
        notebox.remove();
     });


     const taskText = document.createElement('h2');
     taskText.innerHTML = task.name;

     const taskDate = document.createElement('h3');
     taskDate.innerText = task.date;

     const taskDescript = document.createElement('p');
     taskDescript.classList.add('description');
     taskDescript.innerText = task.descript;

     const editBtn = document.createElement('button');
     editBtn.id = 'edit-btn';
     editBtn.innerText = 'Edit';
     editBtn.addEventListener('click', function() {
        editTaskModal(array, project, task);
     });

     const priorityBox = document.createElement('div');
     priorityBox.classList.add('priority-box');

     if (task.priority == 'low') {
         priorityBox.innerText = 'Low';
         priorityBox.style.backgroundColor = 'yellow';
     } else if (task.priority == 'mid') {
        priorityBox.innerText = 'Mid';
        priorityBox.style.backgroundColor = 'orange';
     } else {
        priorityBox.innerText = 'High';
        priorityBox.style.backgroundColor = 'tomato';
     }

     const statusBtn = document.createElement('button');
     statusBtn.id = 'status-btn';
     // Handles status completion and pushes it to object
     statusBtn.addEventListener('click', function() {
        if (task.complete == 'false') {
            task.completeTask();
            statusBtn.style.textDecoration = 'line-through';
            statusBtn.innerText = 'Completed';
        } else {
            task.uncompleteTask();
            statusBtn.style.textDecoration = 'none';
            statusBtn.innerText = 'Uncompleted';
        }
    });
  

     if(task.complete == 'false') {
         statusBtn.innerText = 'Uncomplete';
     } else {
         statusBtn.innerText = 'Completed';
         statusBtn.style.textDecoration = 'line-through'
     };

     notebox.appendChild(deleteTask);
     notebox.appendChild(taskText);
     notebox.appendChild(taskDate);
     notebox.appendChild(taskDescript);
     notebox.appendChild(editBtn);
     notebox.appendChild(priorityBox);
     notebox.appendChild(statusBtn);


     return notebox;
 };





 // Handles task button function
 function addTaskButton(array) {

    const taskBtn = document.querySelector('#newTask');

    taskBtn.addEventListener('click', function() {
        taskModal(array);
    });

 };



 function createFullTask(array, project, name, date, descript, priority, complete) {

    const newTask = createTask(name, date, descript, priority, complete = 'false');
    // Find the project array index
    const findProjectIndex = array.findIndex(e => e[0] == project);
    // Pushes the task on the project
    array[findProjectIndex].push(newTask);
 };


 export {createFullTask, taskUI, addTaskButton, createTask};