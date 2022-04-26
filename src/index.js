import './style.css';

import { createFullTask, taskModal, closeModal, taskUI } from './createtask';

import {createFullProject} from './createproject';

import { createMainProject, displayMain } from './mainproject';













const projectArray = [];

createMainProject('Main', projectArray);



createFullProject('zero', projectArray);
createFullProject('one', projectArray);
createFullProject('two', projectArray);

createFullTask(projectArray,'Main', 'rest', 'today', 'hello', 'low');
createFullTask(projectArray,'Main','wake up', 'tomorrow', 'wake up yo', 'high');

displayMain(projectArray);











console.table(projectArray);


