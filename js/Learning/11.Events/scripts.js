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





let div1 = make("div");
let div2 = make("div");


div1.setAttribute("id", "admin-msg");
div1.setAttribute("class", "message");
div2.setAttribute("class", "msg-content");


div1.prepend(div2);

div2.innerHTML = "some admin text.";

// $("body").append(div1);
// $("body").insertBefore(div1, $("script"));



//The event listener needs 2 arguments: the event and the action

let count = 0;
$("#btn1").addEventListener("click", function() {

    count++;
    $("#msg").innerHTML += "i just click !";
    $("#p1").innerHTML = count;

});



let counter = setInterval(function() {
    count++;
    document.querySelector("#msg").innerHTML = count;
}, 1000);









// →→→ INSERT, APPEND, PREPEND