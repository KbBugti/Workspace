/*--------------DOM = Document Object model-----------*/

// Grab the head title DON object

const title = document.querySelector("title");

//Display the object
console.log(title);

// display the inner content of the object
console.log(title.innerHTML);

//Grab the object and store it
const h1 = document.querySelector("h1");


h1.innerHTML = "Hello world ";
h1.classList.add("bob", "and", "marco");

// ADD or Remove a class
h1.classList.remove("main-header");
h1.classList.add("bob");



// Element Attribute
h1.setAttribute("id", "main-header");

h1.removeAttribute("id");
console.log(h1);

console.log(h1.getAttribute("id"));


//GET Element by ID ("my-console is the ID of my element")
const myConsole = document.getElementById("my-console");

myConsole.innerHTML = "let bob = 3;";

console.log(myConsole);


//querySelector will only the first item who match the query
let bob = document.querySelector(".bob");
console.log(bob);