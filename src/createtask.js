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


 function taskUI(name, date, descript, priority, complete = 'false') {
     const notebox = document.createElement('div');
     notebox.classList.add('notebox');

     const deleteTask = document.createElement('span');
     deleteTask.classList.add('delete-task');
     deleteTask.innerText = '+';
     deleteTask.addEventListener('click', function() {
        notebox.remove();
     });


     const taskText = document.createElement('h2');
     taskText.innerHTML = name;

     const taskDate = document.createElement('h3');
     taskDate.innerText = date;

     const taskDescript = document.createElement('p');
     taskDescript.classList.add('description');
     taskDescript.innerText = descript;

     const editBtn = document.createElement('button');
     editBtn.id = 'edit-btn';
     editBtn.innerText = 'Edit';

     const priorityBox = document.createElement('div');
     priorityBox.classList.add('priority-box');

     if(priority == 'low') {
         priorityBox.innerText = 'Low';
         priorityBox.style.backgroundColor = 'yellow';
     } else if (priority == 'mid') {
        priorityBox.innerText = 'Mid';
        priorityBox.style.backgroundColor = 'orange';
     } else {
        priorityBox.innerText = 'High';
        priorityBox.style.backgroundColor = 'tomato';
     }

     const statusBtn = document.createElement('button');
     statusBtn.id = 'status-btn';

     if(complete == 'false') {
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



 function taskModal() {
     const taskModal = document.createElement('div');
     taskModal.classList.add('task-modal');

     const taskForm = document.createElement('form');

     const closeModal = document.createElement('span');
     closeModal.classList.add('close-modal');
     closeModal.innerText = '+';

     const taskText = document.createElement('input');
     taskText.type = 'text';
     taskText.id = 'task';
     taskText.placeholder = 'Task';
     taskText.required;

     const taskDate = document.createElement('input');
     taskDate.type = 'date';
     taskDate.id = 'date';
     taskDate.required;

     const textArea = document.createElement('textarea');
     textArea.id = 'description';
     textArea.cols = '30';
     textArea.rows = '10';
     textArea.placeholder = 'Description';
     textArea.style.resize = 'none';

     //////////////// Multiple Selection
     const label = document.createElement('label');
     label.for = 'priority';
     label.innerText = 'Priority:';

     const select = document.createElement('select');
     select.name = 'priority';
     select.id = 'priority';

     const optionLow = document.createElement('option');
     optionLow.value = 'low';
     optionLow.innerText = 'Low';

     const optionMid = document.createElement('option');
     optionMid.value = 'mid';
     optionMid.innerText = 'Mid';

     const optionHigh = document.createElement('option');
     optionHigh.value = 'high';
     optionHigh.innerText = 'High';

     select.append(optionLow);
     select.append(optionMid);
     select.append(optionHigh);
    ///////////////

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerText = 'Add Task';

    taskForm.append(closeModal);
    taskForm.append(taskText);
    taskForm.append(taskDate);
    taskForm.append(textArea);
    taskForm.append(label);
    taskForm.append(select);
    taskForm.append(submitBtn);

    taskModal.append(taskModal);
    
    return taskModal
 }

 function closeModal() {
     const taskModal = document.querySelector('.task-modal');
     const closeModal = document.querySelector('.close-modal');
     closeModal.addEventListener('click', function() {
     taskModal.style.display = 'none';
     });

 };

 function createFullTask(array, project, name, date, descript, priority, complete) {
    const content = document.querySelector('.content');
     
    const newTask = createTask(name, date, descript, priority, complete = 'false');
    content.appendChild(taskUI(name, date, descript, priority, complete = 'false'));

    // Find the project array index
    const findProjectIndex = array.findIndex(e => e[0] == project);
    // Pushes the task on the project
    array[findProjectIndex].push(newTask);
 };


 export {createFullTask, taskModal, closeModal, createTask};