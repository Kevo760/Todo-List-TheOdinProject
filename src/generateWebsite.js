import './style.css';
import { createFullTask, addTaskButton} from './createtask';
import {createFullProject, addProjectButton, displayProjects} from './createproject';
import { createMainProject, displayMain} from './mainproject';
import {getLocal, setLocal} from './localStorage';










function generateSessionStorage() {

       const projectArray = [];
       createMainProject('Main', projectArray);
       createFullProject('zero', projectArray);
       createFullProject('one', projectArray);
       createFullProject('two', projectArray);
       
       createFullTask(projectArray,'Main', 'rest', '01-01-2049', 'hello', 'low');
       createFullTask(projectArray,'Main','wake up', '12-04-3022', 'wake up yo', 'high');
       
       displayMain(projectArray);
       addProjectButton(projectArray);
       addTaskButton(projectArray);
   

};



function generateLocalStorageSession() {

    const myArray = getLocal();

    if (myArray) {
        const projectArray = myArray;
        const localSession = true;

        displayProjects(projectArray, localSession);
        displayMain(projectArray, localSession);

        addProjectButton(projectArray, localSession);
        addTaskButton(projectArray, localSession);
    } else {

        const projectArray = [];
        createMainProject('Main', projectArray);
        createFullProject('zero', projectArray);
        createFullProject('one', projectArray);
        createFullProject('two', projectArray);
        
        createFullTask(projectArray,'Main', 'rest', '02-02-2049', 'hello', 'low', `complete: "true"`);
        createFullTask(projectArray,'Main','wake up', '12-04-3022', 'wake up yo', 'high', `complete: "true"`);
        setLocal(projectArray);
        
        const localSession = true;
        displayMain(projectArray, localSession);
        addProjectButton(projectArray, localSession);
        addTaskButton(projectArray, localSession);
    
    };


};



export {generateSessionStorage, generateLocalStorageSession};
