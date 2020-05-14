// LOOPS

// let names = ["James", "Julia", "Baksh"];
// console.log(names);
// let james = names[0];



let num = 10;
for (let i = 0; i <= 10; i++) {
    // console.log(i);

}



// let start = 100;
// let max = 1;

// Classic loop:
//First 
// 2nd part = condition - when you want to stop the loop
// 3nd part = 


// for (let i = start; i <= max; i--) {
//     // console.log("My corrent number is :" + i);
// }

let names = ["James", "Julia", "Baksh"];
// console.log(names);

// for (let i = 0; i < names.length; i++) {
// console.log("Name: " + names[i]);
// }

// Challenge 

let todos = [{
        text: "Learn js",
        completed: true
    },
    {
        text: "Learn PHP",
        completed: false
    },
    {
        text: "Learn Python",
        completed: false
    }
];

// console.log();




// 1. Display the  numbers between 20 and 30

// let start = 20;
// let max = 30;
for (let i = 20; i <= 30; i++) {
    console.log(i);
}

for (i = 0; i < todos.length; i++) {
    let text = todos[i].text;
    let completed = todos[i].completed;

    let DisplayStatus = (completed == true) ? "Done" : "Todo ";


    // This is a long way
    // if (completed == true) {
    //     DisplayStatus = "Done";

    // } else {
    //     DisplayStatus = "Todo";
    // }



    let output = text + ": " + completed;

    console.log(text, DisplayStatus);
}




// ForEach loops

//We call the function argument "Closure" anonymus function 

todos.forEach(function(item) {
    console.log(item.text);
});



function bob(item) {
    console.log(item.text);

}
todos.forEach(bob);