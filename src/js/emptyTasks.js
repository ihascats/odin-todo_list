function emptyTasks(){
    while (document.querySelector('.tasks>div').firstElementChild){
        document.querySelector('.tasks>div').firstElementChild.remove();
    }
}

export default emptyTasks