function tasks(key, Information){
    Information.informationHandler[key].forEach(value => {
        console.log(Information.toDoItemArray[value].title);
    })
}

export default tasks;