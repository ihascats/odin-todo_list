import '../css/styles.css';
import Card from './card';
import newProjectTab from './newProject';
import select from "./selected"

let card1 = new Card(0, "Something", "Lorem", "Today", 4, [], "Something somethin");
console.table(card1);

const projectsSelector = document.querySelector('.projects');
const byDateSelector = document.querySelector('.by-date');

projectsSelector.addEventListener('click', (event)=>{
    newProjectTab(event, '+');
    select(event, projectsSelector, byDateSelector);
});

byDateSelector.addEventListener('click', (event)=>{
    select(event, projectsSelector, byDateSelector);
});