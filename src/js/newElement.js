function quickMakeNewElement(type = 'div', elementClass = ''){
    let element = document.createElement(type);
    if (elementClass!=''){
        element.classList.add(elementClass);
    }
    return element
}

export default quickMakeNewElement