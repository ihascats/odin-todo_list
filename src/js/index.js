import '../css/styles.css';
import newProjectTab from './newProject';
import select from "./selected";
import createButton from "./createProject"
import newButton from './newProjectButton';
import Information from './informationInOnePlace';
import populate from './populateNote';
import checked from './markChecked';
import tasks from './displayTasks'

let info = new Information(); 

const projectsSelector = document.querySelector('.projects');
const byDateSelector = document.querySelector('.by-date');


createButton('personal', projectsSelector);
createButton('work', projectsSelector);
projectsSelector.appendChild(newButton('+', 'create-new-project'));




info.addProject('personal');
info.addProject('work');
console.table(info.projectsArray);
info.projectsArray.forEach(item => {
    console.table(item);
})
// creates ToDo item in 'personal' project
info.addToDoItem('Test', 'personal');
// displays projects and what todo items they are holding
console.table(info.informationHandler);
console.table(info.projectsArray);
// displays ToDo item with id of 0
console.table(info.toDoItemArray[0]);
tasks('personal', info);

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