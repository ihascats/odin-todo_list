import newButton from "./newProjectButton";

class Project {
    constructor(name){
        this.name = name.toUpperCase();
    }

    createButton(appendWhere){
        appendWhere.appendChild(newButton(this.name, this.name.toLowerCase()));
    }
}

export default Project