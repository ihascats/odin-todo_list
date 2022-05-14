import quickMakeNewElement from "./newElement";

function createNewItem(info, lookingFor){
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
            if (item.value == '') return
            
            let checkList = document.querySelector('.checkList')
            checkList.lastElementChild.remove();
            checkList.appendChild(newItem(item.value));
            checkList.appendChild(newCreator(lookingFor));
            let currentId = document.querySelector('.tasks>div>.selected').classList[0];
            info.toDoItemArray.forEach(infoItem =>{
                if (infoItem.id == currentId){
                    infoItem.checkList.push({'input':[item.value, 'pending']});
                }
            })
        }

        if (event.key == 'Escape'){
            item.value = lookingFor;
        }
    }
}

function newItem(item){
    let li = quickMakeNewElement('li');
    let button = quickMakeNewElement('button');
    let input = quickMakeNewElement('input', 'input');
    li.appendChild(button);
    li.appendChild(input);
    input.setAttribute('type', 'text');
    input.value = item;
    return li;
}

function newCreator(lookingFor){
    let div = quickMakeNewElement();
    let input2 = quickMakeNewElement('input', 'newListItem');
    input2.setAttribute('type', 'text');
    input2.value = lookingFor;
    div.appendChild(input2);
    return div;
}

export {createNewItem, newItem, newCreator}