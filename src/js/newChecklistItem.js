import quickMakeNewElement from "./newElement";

function createNewItem(input, lookingFor){
    document.onkeydown = function(event){
        let newListItem = event.target.closest('.newListItem');
        let item = document.querySelector('.newListItem');
        if (!newListItem || newListItem == null) return
        document.onclick = function(event){
            let newListItemCheck = event.target.closest('.newListItem');
            if (!newListItemCheck || newListItemCheck == null){
                item.value = lookingFor;
                document.onclick = null;
            }
        }
        if (item.value == lookingFor){
            item.value = '';
        }

        if (event.key == 'Enter'){
            console.log(item.value);
            let li = quickMakeNewElement('li');
            let button = quickMakeNewElement('button');
            let input = quickMakeNewElement('input', 'input');
            li.appendChild(button);
            li.appendChild(input);
            input.setAttribute('type', 'text');
            input.value = item.value;
            let checkList = document.querySelector('.checkList')
            checkList.lastElementChild.remove();
            checkList.appendChild(li);
            let div = quickMakeNewElement();
            let input2 = quickMakeNewElement('input', 'newListItem');
            input2.setAttribute('type', 'text');
            input2.value = lookingFor;
            div.appendChild(input2);
            checkList.appendChild(div);
        }

        if (event.key == 'Escape'){
            item.value = lookingFor;
        }
    }
}

export default createNewItem