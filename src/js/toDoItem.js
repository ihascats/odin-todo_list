class ToDoInformation {
    constructor (id = 0, title = "", description = "", dueDate = 'dd/mm/yyyy', priority = 0, checkList = [], note = ""){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;
        this.note = note;
    }
}

export default ToDoInformation;