"use strict";
let age = 59;
if (age < 0) {
    console.log("Age cannot be negative.");
}
else if (age >= 0 && age <= 12) {
    console.log("You are a child.");
}
else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
}
else if (age >= 20 && age <= 35) {
    console.log("You are a young adult.");
}
else if (age >= 36 && age <= 60) {
    if (age == 60) {
        console.log("You are a senior citizen.");
    }
    else if (age >= 36 && age < 60) {
        console.log("You are an adult.");
    }
}
else if (age > 60) {
    console.log("You are a senior citizen.");
}
else {
    console.log("Invalid age.");
}
