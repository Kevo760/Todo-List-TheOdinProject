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
        deleteProject.parentElement.remove()
        console.log(projectArray);
    });

    

    projectBox.appendChild(projectName);
    projectBox.appendChild(deleteProject);

    sidebar.appendChild(projectBox);

    return sidebar;
};


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
            };
            // Empties content
            content.innerHTML = '';

            // Set's clicked project box to active
            this.className += ' active';
            const projectName = this.children[0].innerText;
            // Finds index of project name
            const projectIndex = array.findIndex(e => e[0] == projectName);

            // Displays the active project that is clicked
            const activeProject = array[projectIndex];
            for (let i = 0; i < activeProject.length; i++) {
                // Displays only objects
                if(typeof activeProject[i] == 'object') {
                    content.append(taskUI(array, projectName, activeProject[i]));
                };
            };

        });
    };

};


function createFullProject(name, array) {
    
    array.push(createProject([name]));
    projectSidebarUI(name, array);
    activeProject(array);
};





export {createFullProject, activeProject};


