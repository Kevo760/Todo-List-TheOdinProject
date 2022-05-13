import { getLocal, setLocal } from "./localStorage";
import { createFullProject } from "./createproject";

function projectModalUI(array, localSession) {
//////////////////////////// LOCAL STORAGE //////////////////////////////
if(localSession == true) {
    array == getLocal();
};
//////////////////////////// LOCAL STORAGE //////////////////////////////


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
        e.preventDefault();

        const newProject = ProjectText.value;

        if (ProjectText.value != '') {
            // Create project and pass it to array
            createFullProject(newProject, array, localSession);

            // Remove project Modal
;            projectModal.remove();
        };
        
    });

    //Form Area
    
    projectForm.append(closeModal);
    projectForm.append(ProjectText);
    projectForm.append(submitBtn);

    projectModal.append(projectForm);

    return document.body.append(projectModal);
};

export { projectModalUI };