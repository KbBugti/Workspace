/* ------------ToDo List global scope------------ */
let todoList = [
    "To do shopping",
    "Nobdoy",
    "Seko",
    "Buy it today",
    "Do this"
];

/* ------------Display ToDo------------ */

function displayTodos() {
    //local scope
    console.log(todoList);
    // console.log(todoList);
}

displayTodos();


// console.log(bob); // this will undefined because bob 


/* ------------ADD ToDo------------ */
function addTodo(text) {
    todoList.push(text);
    displayTodos();

}
addTodo("My new todo");

/* ------------Change ToDo------------ */

function changeTodo(index, text) {
    todoList[index] = text;
    displayTodos();
}

changeTodo(1, "Buy cars");
changeTodo(3, "Dont do it");


/* ------------delete a ToDo------------ */
function deleteTodo(index, numberToDelete = 1) {
    todoList.splice(index, numberToDelete);
    displayTodos();

}
deleteTodo(0, 1);