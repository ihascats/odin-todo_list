import newButton from "./newProjectButton";

function submit(toBeChanged, change, lookingFor=''){
    document.onkeydown = function(event) {
        if(event.key == "Enter") {
            if (change.value!=''){
                toBeChanged.textContent = change.value.toUpperCase();
                toBeChanged.classList = change.value.toLowerCase().replaceAll(" ", "");

                if (lookingFor!=''){
                    toBeChanged.parentElement.appendChild(newButton(lookingFor));
                }
                document.onkeydown = null;
            }
            if (change.value==''){
                if (lookingFor!=''){
                    toBeChanged.textContent = lookingFor.toUpperCase();
                }
                document.onkeydown = null;
            }
        }
        if(event.key == "Escape"){
            if (lookingFor!=''){
                toBeChanged.textContent = lookingFor.toUpperCase();
            }
            document.onkeydown = null;
        }
    };
}

export default submit