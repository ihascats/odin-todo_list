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

    event.target.oninput = ()=>{
        info.toDoItemArray[id][className] = event.target.value;
        if (className == 'title'){
            document.querySelector('.tasks>div>.selected').textContent = event.target.value;
        }
    }
}

export default store