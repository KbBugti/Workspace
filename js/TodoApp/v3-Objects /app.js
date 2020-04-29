let todos = {

    /* ------------ToDo List global scope------------ */
    todoList: [
        "To do shopping",
        "Nobdoy",
        "Seko",
        "Buy it today",
        "Do this"
    ],

    displayTodos: function() {
        console.log(this.todoList);
    },

    /* ------------ADD ToDo------------ */

    addTodo: function(text) {

        this.todoList.push(text);
        this.displayTodos();

    },

    /* ------------Change ToDo------------ */

    changeTodo: function(index, text) {
        this.todoList.push(text);
        this.displayTodos();

    },



    /* ------------delete a ToDo------------ */

    deleteTodo: function(index, numberToDelete = 1) {
        this.todoList.splice(index, numberToDelete);
        this.displayTodos();
    }
}

todos.displayTodos();
todos.addTodo("Test todo");
todos.deleteTodo(1);
todos.changeTodo(2, "some other value for this todo");