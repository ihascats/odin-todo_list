function populate(information){
    Object.keys(information).forEach(key => {
        if (document.querySelector(`.${key}`)){
            document.querySelector(`.${key}`).value = information[key];
        }
    })
}

export default populate;