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
const tasksDivSelector = document.querySelector('.tasks>div');

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

document.onclick = function(){

    let selected = document.querySelector('.selected');

    while (tasksDivSelector.firstElementChild){
        tasksDivSelector.firstElementChild.remove();
    }
    
    info.returnTasksWithin(selected.textContent).forEach(position => {
        let item = info.toDoItemArray[position].title;
        tasksDivSelector.appendChild(newButton(item, item));
    });

    tasksDivSelector.appendChild(newButton('+', 'create-new-project'));
}

tasksDivSelector.appendChild(newButton("+", "create-new-project"))
// populates card with ToDo item of id 0
// populate(info.toDoItemArray[0]);

document.querySelector('.checkList').onclick = function(event){
    checked(event);
}

projectsSelector.addEventListener('click', (event)=>{
    newProjectTab(event, '+');
    select(event, projectsSelector, byDateSelector);
});

tasksDivSelector.addEventListener('click', (event)=>{
    newProjectTab(event, '+');
    select(event, projectsSelector, byDateSelector);
});

byDateSelector.addEventListener('click', (event)=>{
    select(event, projectsSelector, byDateSelector);
});