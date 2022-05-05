function checked(event){
    let listItem = event.target;
    if (!listItem || listItem == null || listItem.nodeName != 'BUTTON') return
    listItem.nextSibling.classList.toggle('checked');
    if (!listItem.textContent){
        listItem.textContent = 'X'
    } else {
        listItem.textContent = '';
    }
}

export default checked