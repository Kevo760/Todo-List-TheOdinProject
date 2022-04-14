import { de } from "date-fns/locale";

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




function createFullProject(name, array) {
    
    array.push(createProject(name));
    projectSidebarUI(name, array);
}

export {createFullProject};


