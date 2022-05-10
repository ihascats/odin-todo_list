function select(event, ...check){
    let button = event.target.closest('button');
    if (!button || button == null || button.textContent == '') return
    check.forEach(node => {
        node.childNodes.forEach(element => {
            if (element.classList){
                if (element.classList.contains("selected")){
                    element.classList.remove("selected");
                }
            }
        })
    })
    button.classList.add('selected');
}

export default select