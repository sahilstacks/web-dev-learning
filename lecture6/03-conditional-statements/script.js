let age = 18;
if (age < 13) {
    console.log("You are a child.");
} else if (age < 18) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}


let percent = 78;
if (percent >= 80 && percent <= 100) {
    console.log("Grade-A");
} else if (percent >= 60 && percent <= 79) {
    console.log("Grade-B");
} else if (percent >= 45 && percent <= 59) {
    console.log("Grade-C");
} else if (percent >= 33 && percent <= 44) {
    console.log("Grade-D");
} else if (percent >= 0 && percent <= 43) {
    console.log("Fail");
} else {
    console.log("Wrong Input");
}