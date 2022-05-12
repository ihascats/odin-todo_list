import newButton from "./newProjectButton";



function createButton(name, appendWhere){
    appendWhere.appendChild(newButton((name[0].toUpperCase() + name.substring(1).toLowerCase()), name.toLowerCase()));
}


export default createButton