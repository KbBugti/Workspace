//CONDITIONS

let num = "5";
let num2 = "20";

//Comparison opeartors

if (num < 7) {
    console.log("true");
} else {

    console.log("false");
}

if ("5" === 5) {
    console.log("True");
} else {
    console.log("False");
}

if (num > 5 || num2 < 30) {
    console.log("Double check is ", "True");
}
//A double check with "And" (logical operator)
//Both conditions must be true
// if (num > 5 num2 < 30) {
//     console.log.apply("double check three is", "True");
// }




//using not operator
// if (num !== "5") {
//     console.log("not operator: True!");
// }

//Complex checks
if ((num === 5 && num > 5) || (num2 == 20 && num2 > 20)) {
    console.log("True!");
}


// if (num3) {
//     let num3 = 3 - 3 * 2 + 1;
//     let n = num3.toString();
// }




//CHALLENGE
function message() {
    let d = new Date();
    let hour = d.getHours();
    console.log(hour);
    let output = "";
    if (hour < 8) {
        utput = "What are you doing that early?";
    }
    if (hour >= 8 && hour <= 12) {
        utput = "Good morning";

    }

    if (hour >= 12 && hour < 17) {
        utput = "Good afternon";

    }


    if (hour >= 17 && hour < 21) {
        utput = "Good evening";

    }

    if (hour >= 21) {
        output = "Good night";

    }
}
console.log("Challenge message", output);
message(21);