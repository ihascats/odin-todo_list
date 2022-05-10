import submit from "./submitOnEnter";
import quickMakeNewElement from "./newElement";

function newProjectTab(event, lookingFor = '+', info){

    let newTab = event.target;

    if (!newTab || newTab == null) return
    
    if (newTab.textContent == lookingFor){

        // make new element that is input type
        let textInput = quickMakeNewElement('input', 'css-input');
        // set input type to text
        textInput.setAttribute("type", "text");

        // empty new tab button, and then append input text area
        newTab.textContent = '';
        newTab.appendChild(textInput);

        
        submit(newTab, textInput, lookingFor, info);
        
    }

}


export default newProjectTab;