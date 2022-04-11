function createProject(name) {
return name
};

// Creates project side bar
function projectSidebarUI(name) {
    const sidebar = document.querySelector('.sidebar');


    const projectBox = document.createElement('div');
    projectBox.classList.add('project-box');

    const projectName = document.createElement('p');
    projectName.innerText = name;

    const deleteProject = document.createElement('p');
    deleteProject.classList.add('delete-project');
    deleteProject.innerText = '+';

    projectBox.appendChild(projectName);
    projectBox.appendChild(deleteProject);

    sidebar.appendChild(projectBox);

    return sidebar;
};

function deleteProject(name) {
    const projectBox = document.querySelector('.project-box');

    const deleteProject = document.querySelector('.delete-project');
    deleteProject.addEventListener('click', function() {
        projectArray.filter(function(project) {
         return project !== name;
        });

        projectBox.remove();
    });

};

export {createProject, projectSidebarUI, deleteProject};


