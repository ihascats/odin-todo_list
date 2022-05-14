import { newCreator, newItem } from "./newChecklistItem";
function populate(information){
    Object.keys(information).forEach(key => {
        if (document.querySelector(`.${key}`)){
            if (key == 'checkList'){
                let checkList = document.querySelector('.checkList')
                while(checkList.firstElementChild){
                    checkList.firstElementChild.remove();
                }
                information.checkList.forEach(object =>{
                    checkList.appendChild(newItem(Object.values(object)[0][0]));
                })
                checkList.appendChild(newCreator('+'));
            } if (key != 'checkList' && key != 'newListItem') {
                document.querySelector(`.${key}`).value = information[key];
            }
        }
    })
}

export default populate;