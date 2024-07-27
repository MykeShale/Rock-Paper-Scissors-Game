const todolist = []

function addToDo(){
    const inputElement = document.querySelector('.gggjs-input')
    const name = inputElement.value

    todolist.push(name)
    console.log(todolist)
}
