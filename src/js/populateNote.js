function populate(information){
    Object.keys(information).forEach(key => {
        if (document.querySelector(`.${key}`)){
            document.querySelector(`.${key}`).textContent = information[key];
        }
    })
}

export default populate;