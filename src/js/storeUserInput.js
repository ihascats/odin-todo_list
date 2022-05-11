function store(info, event, id){
    let input = event.target.closest('input');
    let textArea = event.target.closest('textArea');
    if (!input && !textArea) return;''
    let className;
    if (input){
        className = input.classList[0];
    } else {
        className = textArea.classList[0];
    }
    console.log(className)
    console.log(info.toDoItemArray[id][className]);
    event.target.onchange = ()=>{
        info.toDoItemArray[id][className] = event.target.value
    }
}

export default store