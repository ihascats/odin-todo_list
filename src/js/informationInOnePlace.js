import ToDoInformation from "./toDoItem";
import Project from "./createProject";

class Information {
    constructor(){
        this.projectsArray = [];
        this.toDoItemArray = [];
        this.informationHandler = {};
    }

    addProject(projectName){
        if (!this.projectsArray.includes(projectName)){
            this.projectsArray.push(projectName);
            this.informationHandler[projectName] = [];
        }
    }

    addToDoItem(title, project){
        let item = new ToDoInformation(this.toDoItemArray.length, title);
        this.toDoItemArray.push(item);
        this.addItemToProjectList(item, project.split(' ').join('').toLowerCase());
    }
    
    addItemToProjectList(item, project){
        this.addProject(project);
        this.informationHandler[project].push(item.id);


    }

    returnTasksWithin(project){
        return this.informationHandler[project.split(' ').join('').toLowerCase()];
    }

    addCheckListItem(text, status, id){
        
    }
    // id = 0, title = "", description = "", dueDate, priority = 0, checkList = [], note = ""
}

export default Information

// project : [id, id, id...]