import ToDoInformation from "./toDoItem";
import Project from "./createProject";

class Information {
    constructor(){
        this.projectsArray = [];
        this.toDoItemArray = [];
        this.informationHandler = {};
    }

    addToDoItem(title, project){
        let item = new ToDoInformation(this.toDoItemArray.length, title);
        this.toDoItemArray.push(item);
        this.addItemToProjectList(item, project.toLowerCase());
    }
    
    addItemToProjectList(item, project){
        this.informationHandler[project] = [];
        this.informationHandler[project].push(item.id);

    }
    // id = 0, title = "", description = "", dueDate, priority = 0, checkList = [], note = ""
}

export default Information

// project : [id, id, id...]