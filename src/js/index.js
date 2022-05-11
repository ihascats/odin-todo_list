import '../css/styles.css';
import newProjectTab from './newProject';
import select from "./selected";
import createButton from "./createProject"
import newButton from './newProjectButton';
import Information from './informationInOnePlace';
import populate from './populateNote';
import checked from './markChecked';
import tasks from './displayTasks'
import showTasksToUser from './tasksWithinProject';
import emptyTasks from './emptyTasks';
import store from './storeUserInput';

let info = new Information(); 

const projectsSelector = document.querySelector('.projects');
const byDateSelector = document.querySelector('.by-date');
const tasksDivSelector = document.querySelector('.tasks>div');
const contentSelector = document.querySelector('.content');

createButton('personal', projectsSelector);
createButton('work', projectsSelector);
projectsSelector.appendChild(newButton('+', 'create-new-project'));




info.addProject('personal');
info.addProject('work');
// creates ToDo item in 'personal' project
info.addToDoItem('Test', 'personal');
info.addToDoItem('Test2', 'personal');
info.addToDoItem('Test3', 'personal');
info.addToDoItem('Test4', 'personal');
info.addToDoItem('Test5', 'personal');
info.addToDoItem('@Test', 'work');
info.addToDoItem('@Test2', 'work');
info.addToDoItem('@Test3', 'work');
info.addToDoItem('@Test4', 'work');
info.addToDoItem('@Test5', 'work');
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
    newProjectTab(event, '+', info);
    select(event, projectsSelector, byDateSelector);

    // find first selected element
    let selected = document.querySelector('.selected');
    // while there is tasks remove them
    emptyTasks();
    // returns tasks within selected project
    // gets title from each toDoItem within a project, displays as button names
    showTasksToUser(selected, info, tasksDivSelector);
    if (event.target.textContent!=''){
        tasksDivSelector.appendChild(newButton('+', 'create-new-project'));
    }
});

tasksDivSelector.addEventListener('click', (event)=>{
    newProjectTab(event, '+', info);
    select(event, tasksDivSelector);

    // find selected task
    let selectedTask = document.querySelector('.tasks>div>.selected');
    // populate card with selected task's info
    if (selectedTask==null) return
    populate(info.toDoItemArray[selectedTask.classList[0]]);
});

byDateSelector.addEventListener('click', (event)=>{
    select(event, projectsSelector, byDateSelector);
    emptyTasks();
});

contentSelector.oninput = function(event){
    let selectedTask = document.querySelector('.tasks>div>.selected');
    let currentId = selectedTask.classList[0];
    store(info, event, currentId);
}