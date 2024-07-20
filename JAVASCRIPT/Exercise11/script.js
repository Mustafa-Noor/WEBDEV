const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateElement = document.querySelector('.js-date-input'); // Add dot before 'js-date-input'

    const newTodo = {
        nameOfTodo: inputElement.value,
        dateOfTodo: dateElement.value
    };

    todoList.push(newTodo); // Push the new object instead of modifying a shared object

    inputElement.value = '';
    dateElement.value = ''; // Clear the date input after adding the todo

    console.log(todoList);
    printTodoList();
}

function printTodoList() {
    let todoListHTML = '';
    for (let index = 0; index < todoList.length; index++) {
        const html = `<p>${todoList[index].nameOfTodo}
                      ${todoList[index].dateOfTodo} 
                      <button onclick="removeTodoAtIndex(${index})">Remove</button></p>`;
        todoListHTML += html;
    }

    document.querySelector('.result').innerHTML = todoListHTML;
}

function removeTodoAtIndex(index) {
    todoList.splice(index, 1);
    printTodoList();
}
