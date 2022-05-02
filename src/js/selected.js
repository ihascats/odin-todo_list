function select(event, ...check){
    let button = event.target;
    if (!button || button == null) return
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