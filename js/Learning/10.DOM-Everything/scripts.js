// →→→ HELPER FUNCTION → TARGET ANY SELECTOR
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}



// →→→ HELPER FUNCTION → CREATE ANY ELEMENT
function make(selector) {
    return document.createElement(selector);
}



// Target element → classic approach

const main = document.querySelector("main");
console.log(main);


// Target element → awesome approach

// const main = $("main");
// console.log($(main));



// →→→ Manage attributes
$("h1").setAttribute("id", "main-tittle");
$("p").setAttribute("class", "row");
$("#p4").removeAttribute("class");

$("html").setAttribute("land", "fr");


// →→→ Manage class Attributes
$("body").classList.add("menu-is-open", "bob"); // Add classes to body



// →→→ CREATE ELEMENT [Classic approach]
// const p1 = document.createElement("p");
const p1 = make("p");
p1.setAttribute("class", "row");
p1.innerHTML = "Hello World";

const span = make("span");
span.textContent = ("info: ");




let div1 = make("div");
let div2 = make("div");


div1.setAttribute("id", "admin-msg");
div1.setAttribute("class", "message");
div2.setAttribute("class", "msg-content");


div1.prepend(div2);

div2.innerHTML = "some admin text.";

$("body").append(div1);

// $("body").insertBefore(div1, $("script"));



//Events

$("#btn1").addEventListener("click", function() {
    $("#msg").innerHTML += "i just click !";

    count++;
    à("#msg").innerHTML = count;

});





main.append(p1); // will add the element at the end of the main
p1.prepend(span); // will add the element at the begining of the p1

//Insert before the P1
main.insertBefore(p1, $("#p2"));


//remove an element
// $("main").remove();




// →→→ ADD TEXT CONTENT
p1.textContent += "This an veriable";


// →→→ ADD HTML CONTENT
// p1.innerHTML = "<span class="success ">info: </span> complex content with tags.";


// This will touch all of them


$$("h1").forEach(function(item) {
    item.style.backgroundColor = "#ccc";
});

// console.log($$("h1"));


// →→→ DO STYLES
$("#p2").style.color = "#f00";
$("#p3").style.backgroundColor = "#ccc";
$("#p4").style.cssText = "background-color: #fc0; color: #fff";









// →→→ INSERT, APPEND, PREPEND