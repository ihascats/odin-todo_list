import newButton from "./newProjectButton";
function showTasksToUser(selected, info, appendTo){
    if (!info.returnTasksWithin(selected.textContent)) return
    info.returnTasksWithin(selected.textContent).forEach(position => {
        let item = info.toDoItemArray[position];
        let title = item.title;
        let id = item.id;
        if (id == 0){
            appendTo.appendChild(newButton(title, '0'));
        } else
        appendTo.appendChild(newButton(title, id));
    });
}

export default showTasksToUser