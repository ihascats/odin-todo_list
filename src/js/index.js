import '../css/styles.css';
import newProjectTab from './newProject';
import select from "./selected";
import Project from "./createProject"
import newButton from './newProjectButton';
import Information from './informationInOnePlace';
import populate from './populateNote';
import checked from './markChecked';

const projectsSelector = document.querySelector('.projects');
const byDateSelector = document.querySelector('.by-date');

let personalProject = new Project('personal');
let workProject = new Project('work');

personalProject.createButton(projectsSelector);
workProject.createButton(projectsSelector);
projectsSelector.appendChild(newButton('+', 'create-new-project'));


let info = new Information();

// creates ToDo item in 'personal' project
info.addToDoItem('Test', 'personal');
// displays projects and what todo items they are holding
console.table(info.informationHandler);
// displays ToDo item with id of 0
console.table(info.toDoItemArray[0]);

// populates card with ToDo item of id 0
// populate(info.toDoItemArray[0]);

document.querySelector('.checkList').onclick = function(event){
    checked(event);
}

projectsSelector.addEventListener('click', (event)=>{
    newProjectTab(event, '+');
    select(event, projectsSelector, byDateSelector);
});

byDateSelector.addEventListener('click', (event)=>{
    select(event, projectsSelector, byDateSelector);
});