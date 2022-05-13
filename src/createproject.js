import { taskUI } from "./createtask";
import { projectModalUI } from "./projectmodal";
import { mainProjectUI } from "./mainproject";
import { getLocal, setLocal } from "./localStorage";

function createProject(name) {
return name;
};

// Creates project side bar
function projectSidebarUI(name, array, localSession) {
//////////////////////////// LOCAL STORAGE //////////////////////////////
if(localSession === true) {
    array == getLocal();
}
//////////////////////////// LOCAL STORAGE //////////////////////////////

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

//////////////////////////// LOCAL STORAGE //////////////////////////////
if(localSession == true) {
    setLocal(array);
};
//////////////////////////// LOCAL STORAGE //////////////////////////////

    });

    

    projectBox.appendChild(projectName);
    projectBox.appendChild(deleteProject);

    sidebar.appendChild(projectBox);

    return sidebar;
};


// Handles project that is clicked to show the task it contains
function activeProject(array, localSession) {
//////////////////////////// LOCAL STORAGE //////////////////////////////

if(localSession == true) {
    array == getLocal();
} else {
    localSession == false;
};
//////////////////////////// LOCAL STORAGE //////////////////////////////  

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
                        content.append(taskUI(array, 'Main', main[i], localSession));
                    }
                };
            } else {

            // Displays the active project that is clicked
            const activeProject = array[projectIndex];
            for (let i = 0; i < activeProject.length; i++) {
                // Displays only objects
                if(typeof activeProject[i] == 'object') {
                    content.append(taskUI(array, projectName, activeProject[i], localSession));
                };
            };



            };

        });
    };

};

// Creates project on the side bar ui and pushes project to the main array
function createFullProject(name, array, localSession) {
//////////////////////////// LOCAL STORAGE //////////////////////////////
if(localSession == true) {
    array == getLocal();
};
//////////////////////////// LOCAL STORAGE //////////////////////////////

    // pushes project into array
    array.push(createProject([name]));
    // Creates sidebar UI

//////////////////////////// LOCAL STORAGE //////////////////////////////
if(localSession == true) {
    setLocal(array);
};
//////////////////////////// LOCAL STORAGE //////////////////////////////

    projectSidebarUI(name, array, localSession);
    // Actives active project
    activeProject(array, localSession);
};


// Shows projects in the array and set main active and allows active projects to be clicked
function displayProjects(array, localSession) {
    

    // Main project sidebar 
    mainProjectUI('Main');
    // Other project sidebar
    for (let i = 1; i < array.length; i++) {
        projectSidebarUI(array[i][0], array, localSession);
    };
    // Activates active class 
    activeProject(array, localSession);
};



// add project button event listener on click
function addProjectButton(array, localSession) {
//////////////////////////// LOCAL STORAGE //////////////////////////////
if(localSession == true) {
    array == getLocal();
};
//////////////////////////// LOCAL STORAGE //////////////////////////////

const projectBtn = document.querySelector('#newProject');
projectBtn.addEventListener('click', function() {
    projectModalUI(array, localSession);
});

};












export {createFullProject, activeProject, addProjectButton, displayProjects}
