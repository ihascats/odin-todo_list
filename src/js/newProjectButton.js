import quickMakeNewElement from "./newElement";

function newButton(text, setClass){
    let button = quickMakeNewElement('button', setClass);
    button.textContent = text;
    return button;
}

export default newButton