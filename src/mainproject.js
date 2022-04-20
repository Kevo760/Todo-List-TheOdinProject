
function mainProject(name) {
    return name;
    };
    
    // Creates project side bar
    function mainProjectUI(name) {
        const sidebar = document.querySelector('.sidebar');
    
    
    
        const projectBox = document.createElement('div');
        projectBox.classList.add('project-box');
    
        const projectName = document.createElement('p');
        projectName.innerText = name;
      
        projectBox.appendChild(projectName);
    
        sidebar.appendChild(projectBox);
    
        return sidebar;
    };

    

    
    function createMainProject(name,array) {
        
        array.push(mainProject(name));
        mainProjectUI(name);
    };
    
    export {createMainProject};