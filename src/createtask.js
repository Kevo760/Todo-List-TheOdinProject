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

     const priorityBox = document.createElement('div');
     priorityBox.classList.add('priority-box');

     if(task.priority == 'low') {
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
     // Handles status completion
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






 function taskModal(array) {
     const taskModal = document.createElement('div');
     taskModal.classList.add('modal');

     const taskForm = document.createElement('form');

     const closeModal = document.createElement('span');
     closeModal.classList.add('close-modal');
     closeModal.innerText = '+';
     closeModal.addEventListener('click', function() {
        taskModal.style.display = 'none';
        });
    
    // Task Name
     const taskText = document.createElement('input');
     taskText.type = 'text';
     taskText.id = 'task';
     taskText.placeholder = 'Task';
     taskText.setAttribute('required', '');
    
     // Task Date
     const taskDate = document.createElement('input');
     taskDate.type = 'date';
     taskDate.id = 'date';
     taskDate.setAttribute('required', '');

    // Task Description
     const textArea = document.createElement('textarea');
     textArea.id = 'description';
     textArea.cols = '30';
     textArea.rows = '10';
     textArea.placeholder = 'Description';
     textArea.style.resize = 'none';
     textArea.setAttribute('required', '');

     // Add to which project
    const projectText = document.createElement('label');
    projectText.for = 'project-select';
    projectText.innerText = 'Project:';
    
    const selectProject = document.createElement('select');
    selectProject.id = 'select-project';
    
    for (let i = 0; i < array.length; i++) {
        const projectNames = array[i][0];
        createOption(projectNames, selectProject)
        };
        



     //////////////// Multiple Selection for priority
     const label = document.createElement('label');
     label.for = 'priority';
     label.innerText = 'Priority:';

     const selectPriority = document.createElement('select');
     selectPriority.name = 'priority';
     selectPriority.id = 'priority';

     const optionLow = document.createElement('option');
     optionLow.value = 'low';
     optionLow.innerText = 'Low';

     const optionMid = document.createElement('option');
     optionMid.value = 'mid';
     optionMid.innerText = 'Mid';

     const optionHigh = document.createElement('option');
     optionHigh.value = 'high';
     optionHigh.innerText = 'High';

     selectPriority.append(optionLow);
     selectPriority.append(optionMid);
     selectPriority.append(optionHigh);
    ///////////////
    
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerText = 'Add Task';
    submitBtn.addEventListener('click', function() {


    // Grabs form info for task
    const tName = taskText.value;
    const tDate = taskDate.value;
    const tDiscript = textArea.value;
    const tPriority = selectPriority.value;

    // Adds form info and add it as a object
    const newTask = createTask(tName, tDate, tDiscript, tPriority);

    //Grabs project value
    const tProject = selectProject.value;

    // Find the project array index
    const findProjectIndex = array.findIndex(e => e[0] == tProject);
    // Pushes the task on the project

    if (taskText.value && taskDate.value && textArea.value != '') {
       array[findProjectIndex].push(newTask);
        taskModal.remove();

        let current = document.getElementsByClassName('active');
        if (current.length > 0) {
            // Removes current active class
            current[0].className = current[0].className.replace(' active', '');
        }
        
        const projectBox = document.querySelector('.project-box');

        // Empties content
        content.innerHTML = '';

        const activeProject = array[findProjectIndex];
        for (let i = 0; i < activeProject.length; i++) {
            // Displays only objects
            if(typeof activeProject[i] == 'object') {
                content.append(taskUI(array, projectName, activeProject[i]));
            };
        }
    };


    });






    taskForm.append(closeModal);
    taskForm.append(taskText);
    taskForm.append(taskDate);
    taskForm.append(projectText);
    taskForm.append(selectProject);
    taskForm.append(textArea);
    taskForm.append(label);
    taskForm.append(selectPriority);
    taskForm.append(submitBtn);

    taskModal.append(taskForm);
    
    return document.body.append(taskModal)
 };

 // Creates Options for form select
 function createOption(name, appendTo) {
    const options = document.createElement('option');
    options.value = name;
    options.innerText = name;

    appendTo.append(options);
 };


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


 export {createFullTask, taskModal, taskUI, addTaskButton};