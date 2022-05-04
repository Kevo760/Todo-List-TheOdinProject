import { taskUI, createTask } from "./createtask";

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

   // If task text, date, and description is not empty push the task and remove the modal
   if (taskText.value && taskDate.value && textArea.value != '') {
      array[findProjectIndex].push(newTask);
       taskModal.remove();

       // removes current active class name
       let current = document.getElementsByClassName('active');
       current[0].className = current[0].className.replace(' active', '');
       
       // add active class on project that is adding the task
       const projectBox = document.querySelectorAll('.project-box');
       projectBox[findProjectIndex].classList.add('active');

       // Empties content
       const content = document.querySelector('.content');
       content.innerHTML = '';

       // Displays taskui
       const activeProject = array[findProjectIndex];
       for (let i = 0; i < activeProject.length; i++) {
           // Displays only objects
           if(typeof activeProject[i] == 'object') {
               content.append(taskUI(array, tProject, activeProject[i]));
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


 

export { taskModal };