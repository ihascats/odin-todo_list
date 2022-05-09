import newButton from "./newProjectButton";
function showTasksToUser(selected, info, appendTo){
    info.returnTasksWithin(selected.textContent).forEach(position => {
        let item = info.toDoItemArray[position];
        let title = item.title;
        let id = item.id;
        appendTo.appendChild(newButton(title, id));
    });
}

export default showTasksToUser