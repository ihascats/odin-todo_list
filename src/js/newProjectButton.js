import quickMakeNewElement from "./newElement";

function newButton(lookingFor){
    let button = quickMakeNewElement('button', 'create-new-project');
    button.textContent = lookingFor;
    return button;
}

export default newButton