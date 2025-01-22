let age: number = 59;

if (age < 0) {
    console.log("Age cannot be negative.");
} else if (age >= 0 && age <= 12) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else if (age >= 20 && age <= 35) {
    console.log("You are a young adult.");
} else if (age >= 36 && age <= 60) {
    if(age == 60 ){
        console.log("You are a senior citizen.");
    }else if (age >=36 && age < 60){
    console.log("You are an adult.");}
} else if (age > 60) {
    console.log("You are a senior citizen.");
} else {
    console.log("Invalid age.");
}




// let age: number = 18;

// switch (age) {
//     case 10:
//         console.log("You are a child.");
//         break;
//     case 18:
//         console.log("You are a teenager.");
//         break;
//     case 25:
//         console.log("You are a young adult.");
//         break;
//     case 40:
//         console.log("You are an adult.");
//         break;
//     case 65:
//         console.log("You are a senior citizen.");
//         break;
//     default:
//         console.log("Age group not specifically defined.");
// }


// let age: number = 18;

// switch (true) {
//     case age < 0:
//         console.log("Age cannot be negative.");
//         break;
//     case age >= 0 && age <= 12:
//         console.log("You are a child.");
//         break;
//     case age >= 13 && age <= 19:
//         console.log("You are a teenager.");
//         break;
//     case age >= 20 && age <= 35:
//         console.log("You are a young adult.");
//         break;
//     case age >= 36 && age <= 60:
//         console.log("You are an adult.");
//         break;
//     case age > 60:
//         console.log("You are a senior citizen.");
//         break;
//     default:
//         console.log("Invalid age.");
// }
