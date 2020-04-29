/* ------------ToDo List------------ */
let todoList = [
    "Mr",
    "Nobdoy",
    "Seko",
    "Buy it today",
    "Do this"
];
console.log(todoList);
//ADD EN ELEMENT TO THE ARRAY
todoList.push("List in beggining", todoList);
console.log("List after push", todoList);

//Delete from array
todoList.splice(1, 1);
console.log("List after splice", todoList);