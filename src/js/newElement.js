function quickMakeNewElement(type = 'div', elementClass = ''){
    let element = document.createElement(type);
    element.classList.add(elementClass);
    return element
}

export default quickMakeNewElement