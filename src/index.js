import './style.css';

import { createFullTask, taskModal, closeModal, createTask } from './createtask';

import {createFullProject} from './createproject';

import { createMainProject } from './mainproject';


























const projectArray = [];




createFullProject(['zero'], projectArray);
createFullProject(['one'], projectArray);
createFullProject(['two'], projectArray);

createFullTask(projectArray,'zero', 'rest', 'today', 'hello', 'low');
createFullTask(projectArray,'zero','wake up', 'tomorrow', 'wake up yo', 'high');



console.table(projectArray);


