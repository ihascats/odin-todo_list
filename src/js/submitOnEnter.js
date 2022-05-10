import newButton from "./newProjectButton";
import Project from "./createProject";

function submit(toBeChanged, change, lookingFor=''){
    document.onkeydown = (event) => userInputProcess(event, toBeChanged, change, lookingFor);
    document.onclick = function(event){
        let textField = event.target.closest('.create-new-project');
        if (!textField || textField==null){
            document.onkeydown = null;
            document.onclick = null;
            toBeChanged.textContent = lookingFor;
            return
        }
        let firstCreate = document.querySelector('.create-new-project');
        let isTasks = textField.parentElement.parentElement.classList.contains('tasks');
        if (isTasks && firstCreate.textContent != '+'){
            firstCreate.textContent = '+';
        }
    }
}

function userInputProcess(event, toBeChanged, change, lookingFor){

    // if users presses "Enter"
    if(event.key == "Enter") {
        // and if change value is not nothing
        if (change.value!=''){
            // set textContent of "toBeChanged"(node element) into "change" (text input);
            toBeChanged.textContent = change.value.toUpperCase();
            toBeChanged.classList = change.value.toLowerCase().replaceAll(" ", "");

            // if "lookingFor" is not empty/nothing, add a child button
            if (lookingFor!=''){
                toBeChanged.parentElement.appendChild(newButton(lookingFor, 'create-new-project'));
            }
            // disable on key down event
            document.onkeydown = null;
            document.onclick = null;
        }
        // if change value is empty
        if (change.value==''){
            // and looking for is not empty, set "toBeChanged" to "lookingFor"
            if (lookingFor!=''){
                toBeChanged.textContent = lookingFor.toUpperCase();
            }
            // disable on key down event
            document.onkeydown = null;
            document.onclick = null;
        }
    }
    // if user presses "Escape"
    if(event.key == "Escape"){
        // and "lookingFor" is not empty
        if (lookingFor!=''){
            toBeChanged.textContent = lookingFor.toUpperCase();
        }
        // disable on key down event
        document.onkeydown = null;
        document.onclick = null;
    }
}

export default submit