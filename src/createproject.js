import { taskUI } from "./createtask";

function createProject(name) {
return name;
};

// Creates project side bar
function projectSidebarUI(name, array) {
    const sidebar = document.querySelector('.sidebar');
    const projectArray = array;


    const projectBox = document.createElement('div');
    projectBox.classList.add('project-box');


    const projectName = document.createElement('p');
    projectName.classList.add('project-name');
    projectName.innerText = name;

    const deleteProject = document.createElement('p');
    deleteProject.classList.add('delete-project');
    deleteProject.innerText = '+';

    // Deletes project from array and removes UI
    deleteProject.addEventListener('click', function() {
        const removeProject = projectArray.findIndex((project) => project == name);
        projectArray.splice(removeProject, 1);
        deleteProject.parentElement.remove();
    });

    

    projectBox.appendChild(projectName);
    projectBox.appendChild(deleteProject);

    sidebar.appendChild(projectBox);

    return sidebar;
};


// Handles project that is clicked to show the task it contains
function activeProject(array) {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');


    const projectBox = sidebar.getElementsByClassName('project-box');

    for (let i = 0; i < projectBox.length; i++) {
        projectBox[i].addEventListener('click', function() {
            let current = document.getElementsByClassName('active');
            if (current.length > 0) {
                // Removes current active class
                current[0].className = current[0].className.replace(' active', '');
            }
            // Empties content
            content.innerHTML = '';

            // Set's clicked project box to active
            this.className += ' active';
            const projectName = this.children[0].innerText;
            // Finds index of project name
            const projectIndex = array.findIndex(e => e[0] == projectName);

            // Back up when there is no active class it defaults to main project
            if(projectIndex == '-1') {
                projectBox[0].classList.add('active');
                const main = array[0];
                for (let i = 0; i < main.length; i++) {
                    if (typeof main[i] == 'object' ) {
                        content.append(taskUI(array, 'Main', main[i]));
                    }
                };
            } else {

            // Displays the active project that is clicked
            const activeProject = array[projectIndex];
            for (let i = 0; i < activeProject.length; i++) {
                // Displays only objects
                if(typeof activeProject[i] == 'object') {
                    content.append(taskUI(array, projectName, activeProject[i]));
                };
            }



            };

        });
    };

};

// Creates project on the side bar ui and pushes project to the main array
function createFullProject(name, array) {
    
    array.push(createProject([name]));
    projectSidebarUI(name, array);
    activeProject(array);
};


function addProjectButton(array) {

const projectBtn = document.querySelector('#newProject');
projectBtn.addEventListener('click', function() {
    projectModalUI(array);
})

};



function projectModalUI(array) {
   
    const projectModal = document.createElement('div');
    projectModal.classList.add('modal');

    //Form Area
    const projectForm = document.createElement('form');
    projectForm.classList.add('project-form');

    const closeModal = document.createElement('span');
    closeModal.classList.add('close-modal');
    closeModal.innerText = '+';
    // Removes project modal
    closeModal.addEventListener('click', function() {
        projectModal.remove();
    });



    const ProjectText = document.createElement('input');
    ProjectText.type = 'text';
    ProjectText.id = 'project-text';
    ProjectText.placeholder = 'Project Name';
    ProjectText.setAttribute('required', '');


    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerText = 'Add Project';
    submitBtn.addEventListener('click', function(e) {
        const newProject = ProjectText.value;

        if (ProjectText.value != '') {
            createFullProject(newProject, array);
            projectModal.remove();
        };
        
    });

    //Form Area
    
    projectForm.append(closeModal);
    projectForm.append(ProjectText);
    projectForm.append(submitBtn);

    projectModal.append(projectForm);

    return document.body.append(projectModal);
};









export {createFullProject, activeProject, addProjectButton}
