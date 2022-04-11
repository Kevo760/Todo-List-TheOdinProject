import './style.css';

import { createTask, taskUI, taskModal, closeModal } from './createtask';

import createProject from './createproject';




























const projectArray = [];
const rest = createTask('rest', '1/11/21', 'rest up kid', 'low');
const hello = createTask('hello', 'yesterday', 'hello to you', 'high');
const bye = createTask('bye', 'yesterday', 'bye peeps', 'mid');

const content = document.querySelector('.content');


rest.completeTask();
content.appendChild(taskUI(rest));


const projectOne = createProject(['one']);
const projectTwo = ['two'];

projectOne.push(rest);
projectOne.push(bye);

projectTwo.push([hello]);

projectArray.push(projectOne);
projectArray.push(projectTwo);

const testProject = createProject(['oneTime']);


console.table(projectArray);

console.table(testProject);
