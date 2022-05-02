import quickMakeNewElement from "./newElement";

function newButton(lookingFor, setClass){
    let button = quickMakeNewElement('button', setClass);
    button.textContent = lookingFor;
    return button;
}

export default newButton