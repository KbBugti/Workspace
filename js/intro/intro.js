/*----------------COMMENTS-------------------*/

// This is a single line

/*-------------This is a block comment--------------*/


/*-----------------Variables-----------------*/




// NAMING RULES
// 1. No spaces
// 2. You can not start with numbers
// 3. You can not use dashes or mathematical operators
// 4. You can not use "reserved keywords"

let strin = "body ?";
const num = 9;

/* NAMING BEST PRACTICS
camel case !*/

let first = "Mesh";
let last = "nobody";

/* JS is case sensitive */

let fistt = "Mr";
// do not use same name as this
let lastt = "Nobody";


/*  A VarDate. lts container
 it can contain everythings */

let num1 = (9 + 9) - (3 * 2);
let string = "Bla Bla"
let cond = true;
let data = [1, 2, 3, "Bob"];
let object = {
    name: "John",
    age: 23

};






/*-----------------STRINGS-----------------*/
let str1 = "i am 18 years of age.";
let str2 = "i am 18 years of age.";
//In JS we concatenate with sign
let str3 = "i am " + 35;


let name = "Bob"
let age = 32;
let phrase = name + " is " + age + " years old ";

// console.log(phrase);




//NATIVE STRING METHODS

let txt = "Apple is red ";
let textLenngth = txt.length;
// console.log(textLenngth);


let txt2 = "Beatles";
// console.log(txt2.substr(2, 3));

let txt3 = "powercoders";
// console.log(txt3.substr(5, 2));



/*-----------------NUMBERS-----------------*/

// let interger = 92; //interger
// let negative = -92; //inegative
// let float = 1.5; //float
// let calculate = 8 + 2;
// // console.log(calculate);
// let calc2 = 2 + 3 * 10; //32
// let calc3 = (2 + 3) * 10; //50
// let calc4 = -2(-2);
// // console.log(calc4);




//Modulo operator
let reminder;
reminder = 110 % 60;
reminder = 10 % 2;
// console.log(reminder);
// console.log(reminder);





let rand = Math.random() * 10;
// console.log(rand);

let randInt = Math.round(1.5);
// console.log(randInt);

let roundCeil = Math.ceil(1.285734790);
// console.log(roundCeil);
let roundFloor = Math.floor(1.285734790);
// console.log(roundFloor);


/*-----------------ARRAY  (Lists)-----------------*/

let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
let arr2 = ["joni", "bobay", "lola", "chola"];
// console.log(arr2);

// console.log("Numers array:", arr1[2]);
// console.log(arr2[2]);

//NATIVE ARRAY METHODS
arr2.push("bob");
// console.log(arr2);
// console.log(arr2.length);

//Delete from the array
// arr2.pop(); //Last element
// console.log(arr2);
// arr2.pop(); //First element
// console.log(arr2);



// arr2.splice(2, 2, "Freday");
// console.log(arr2)


//Change a value inside an araay
// arr2[0] = "Arechel";
// console.log(arr2);



/*-----------------FUNCATIONS-----------------*/
function calculateAge(name, birthYears) {
    let date = new Date();
    let currentYear = date.getFullYear();
    let age = currentYear - birthYears;
    let display = name + " is " + age + " years old ";
    return display;
}
let bob_age = calculateAge("bob", 1995);
// console.log(bob_age);


// calculateAge("Kb", 1993);
// calculateAge("Nigga", 1993);
// // console.log(calculateAge("Kb", 1993));
// // console.log(calculateAge("Baksh", 1983));
// // console.log(calculateAge("Nigga", 1938));$



//Retund of the week based on a number
function dayOFWeek(index) {

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return days[1];
}

// console.log(dayOFWeek());


//Greeting function
function personData(greeting, name) {
    // console.log(greeting + " " + name + " !");
}

personData("Hello", "bob");
personData("Bonjour", "John");



//Convert minutes into seconds
function minToSec(minutes) {
    // console.log(minutes + " minutes = " + (minutes * 60) + " seconds");

}

// minToSec(52);
// minToSec(24 * 60);


// function minToSecPrompt() {
//     let usserInput = parseInt(prompt("Number of minutes"));
//     console.log(usserInput + " minutes = " + (usserInput * 60) + " seconds");
// }

// minToSecPrompt();





/*-----------------OBJECTS-----------------*/
//Name, gender, age, country
// let person = {
//     name: "Bob Geldof",
//     gender: "male",
//     age: 68,
//     country: "UK"
// }


// console.log(person);
// console.log(person["name"]);
// console.log(person.name);



let persons = {

    bob: {

        name: "Bob Geldof",
        gender: "male",
        age: 68,
        country: "UK"
    },

    baster: {

        name: "markos Baster",
        gender: "man",
        age: 45,
        country: "Holland"
    },

    Nadia: {

        name: "Nadia Baster",
        gender: "man",
        age: 35,
        country: "Romania"
    }
}

console.log(persons.baster.name)