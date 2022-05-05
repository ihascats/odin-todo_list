import newButton from "./newProjectButton";



function createButton(name, appendWhere){
    appendWhere.appendChild(newButton(name.toUpperCase(), name.toLowerCase()));
}


export default createButton