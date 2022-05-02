import '../css/styles.css';
import Card from './card';
import newProjectTab from './newProject';
let card1 = new Card(0, "Something", "Lorem", "Today", 4, [], "Something somethin");
console.table(card1);

document.querySelector('.projects').addEventListener('click', (event)=>{
    newProjectTab(event, '+');
})