import { activeProject } from "./createproject";
import { taskUI } from "./createtask";

function mainProject(name) {
    return name;
    };
    
    // Creates project side bar
    function mainProjectUI(name) {
        const sidebar = document.querySelector('.sidebar');
    
    
    
        const projectBox = document.createElement('div');
        projectBox.classList.add('project-box');
        projectBox.classList.add('active')
    
        const projectName = document.createElement('p');
        projectName.classList.add('project-name');
        projectName.innerText = name;
      
        projectBox.appendChild(projectName);
    
        sidebar.appendChild(projectBox);
    
        return sidebar;
    };


    
    function displayMain(array, localSession) {
        const content = document.querySelector('.content');
    
        const main = array[0];
        for (let i = 0; i < main.length; i++) {
            if (typeof main[i] == 'object' ) {
                content.append(taskUI(array, 'Main', main[i], localSession));
            }
        };

    };




    function createMainProject(name, array, localSession) {
        
        array.push(mainProject([name]));
        mainProjectUI(name);
        activeProject(array, localSession);
    };

    



    
    
    export {createMainProject, displayMain, mainProjectUI};