import submit from "./submitOnEnter";
import quickMakeNewElement from "./newElement";

function newProjectTab(event, lookingFor = '+'){

    let newTab = event.target;
    if (!newTab || newTab == null) return
    if (newTab.textContent == lookingFor){
        console.log('New Tab!');
        let textInput = quickMakeNewElement('input', 'css-input');
        textInput.setAttribute("type", "text");
        newTab.textContent = '';
        newTab.appendChild(textInput);
        submit(newTab, textInput, lookingFor);
        
    }

}


export default newProjectTab;