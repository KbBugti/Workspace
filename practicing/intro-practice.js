function printTime() {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();

    document.body.innerHTML = hours + ":" + mins + ":" + secs;
} {

    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wendesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";

    }
    document.getElementById("demo").innerHTML = " Today is " + day;

}


setInterval(printTime, 1000);