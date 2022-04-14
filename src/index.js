import './style.css';

import { createTask, taskUI, taskModal, closeModal } from './createtask';

import {createFullProject} from './createproject';




























const projectArray = [];
const rest = createTask('rest', '1/11/21', 'rest up kid', 'low');
const hello = createTask('hello', 'yesterday', 'hello to you', 'high');
const bye = createTask('bye', 'yesterday', 'bye peeps', 'mid');

const content = document.querySelector('.content');


rest.completeTask();
content.appendChild(taskUI(rest));




createFullProject('two', projectArray);
createFullProject('zero', projectArray);



console.table(projectArray);


