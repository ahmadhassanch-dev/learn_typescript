// import inquirer from "inquirer";
// import chalk from "chalk";



// function add (a: number, b: number): number {
//   return a + b;
// }
// console.log(add(1, 2)); // 3

// const addition = (a: number, b: number): number => {
//     return a + b;
// };

// console.log(addition(1, 2)); // 3









// var num1 = 0;

// for (var i = 0; num1 < 10; i++) {
//     num1++;
// }

// console.log(num1); // Outputs: 10

// while (num1 < 10) {
//     num1++;
// }

// console.log(num1); // 10









// let array: string[] = ['a', 'b', 'c', 'd', 'e'];

// // 1. pop() - Removes the last element of the array and returns it.
// let poppedElement = array.pop();
// console.log('After pop:', array); // ['a', 'b', 'c', 'd']
// console.log('Popped Element:', poppedElement); // 'e'

// // 2. push() - Adds one or more elements to the end of the array.
// array.push('f', 'g');
// console.log('After push:', array); // ['a', 'b', 'c', 'd', 'f', 'g']

// // 3. shift() - Removes the first element of the array and returns it.
// let shiftedElement = array.shift();
// console.log('After shift:', array); // ['b', 'c', 'd', 'f', 'g']
// console.log('Shifted Element:', shiftedElement); // 'a'

// // 4. unshift() - Adds one or more elements to the beginning of the array.
// array.unshift('x', 'y');
// console.log('After unshift:', array); // ['x', 'y', 'b', 'c', 'd', 'f', 'g']

// // 5. splice() - Adds or removes elements at a specific index.
// // Remove 2 elements starting from index 2.
// let splicedElements = array.splice(2, 2);
// console.log('After splice (removal):', array); // ['x', 'y', 'd', 'f', 'g']
// console.log('Spliced Elements:', splicedElements); // ['b', 'c']

// // Add elements 'p' and 'q' at index 2.
// array.splice(2, 0, 'p', 'q');
// console.log('After splice (addition):', array); // ['x', 'y', 'p', 'q', 'd', 'f', 'g']

// // 6. slice() - Extracts a shallow copy of a portion of the array.
// let slicedArray = array.slice(2, 5); // Extract elements from index 2 to 4 (5 is excluded).
// console.log('Original Array:', array); // ['x', 'y', 'p', 'q', 'd', 'f', 'g']
// console.log('Sliced Array:', slicedArray); // ['p', 'q', 'd']













// let object = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     skills: {
//         programming: ['JavaScript', 'TypeScript', 'Python'],
//         frameworks: ['Angular', 'React', 'Vue']
//     }}

// console.log(object);





// async function calculator() {
//     let continueTransaction = true;

//     while (continueTransaction) {
//         let firstNumbers = await inquirer.prompt({
//             name: "firstNumber",
//             type: "number",
//             message: "Please Enter Your First Number",
//         });

//         let operators = await inquirer.prompt({
//             name: "operator",
//             type: "list",
//             message: "Please Select Function",
//             choices: ["+", "-", "*", "/"],
//         });

//         let secondNumbers = await inquirer.prompt({
//             name: "secondNumber",
//             type: "number",
//             message: "Please Enter Your Second Number",
//         });

//         const firstNumber = firstNumbers.firstNumber;
//         const operator = operators.operator;
//         const secondNumber = secondNumbers.secondNumber;

//         switch (operator) {
//             case "+":
//                 console.log(`Sum of ${firstNumber} and ${secondNumber} is:`, firstNumber + secondNumber);
//                 break;
//             case "-":
//                 console.log(`Subtraction of ${firstNumber} and ${secondNumber} is:`, firstNumber - secondNumber);
//                 break;
//             case "*":
//                 console.log(`Multiplication of ${firstNumber} and ${secondNumber} is:`, firstNumber * secondNumber);
//                 break;
//             case "/":
//                 console.log(`Division of ${firstNumber} and ${secondNumber} is:`, firstNumber / secondNumber);
//                 break;
//             default:
//                 console.log("Invalid operator");
//         }

//         const answer = await inquirer.prompt({
//             name: "continueTransaction",
//             type: "confirm",
//             message: "Do you want to perform another transaction?",
//         });

//         if (answer.continueTransaction) {
//             continueTransaction = true;
//         } else {
//             continueTransaction = false;
//             console.log("Thank you for using the calculator.");
//             console.log("Created by: Ahmad Hassan CH ,  PROGRAMING COMMUNITIES ");
//         }
//     }
// }

// calculator();





// async function calculator() {
//     let continueTransaction = true;

//     while (continueTransaction) {
//         let firstNumbers = await inquirer.prompt({
//             name: "firstNumber",
//             type: "number",
//             message: chalk.red.bold("Please Enter Your First Number"),
//         });

//         let operators = await inquirer.prompt({
//             name: "operator",
//             type: "list",
//             message: chalk.yellowBright.bold("Please Select Function"),
//             choices: ["+", "-", "*", "/"],
//         });

//         let secondNumbers = await inquirer.prompt({
//             name: "secondNumber",
//             type: "number",
//             message: chalk.magentaBright.bold("Please Enter Your Second Number"),
//         });

//         const firstNumber = firstNumbers.firstNumber;
//         const operator = operators.operator;
//         const secondNumber = secondNumbers.secondNumber;

//         switch (operator) {
//             case "+":
//                 console.log(chalk.greenBright.bold(`Sum of ${firstNumber} and ${secondNumber} is : `), firstNumber + secondNumber);
//                 break;
//             case "-":
//                 console.log(chalk.blueBright.bold(`Subtraction Of ${firstNumber} And ${secondNumber} Is : `), firstNumber - secondNumber);
//                 break;
//             case "*":
//                 console.log(chalk.magentaBright.bold(`Multiplication Of ${firstNumber} And ${secondNumber} Is : `), firstNumber * secondNumber);
//                 break;
//             case "/":
//                 console.log(chalk.yellowBright.bold(`Division Of ${firstNumber} And ${secondNumber} Is : `), firstNumber / secondNumber);
//                 break;
//             default:
//                 console.log(chalk.red.bold("Invalid operator"));
//         }

//         const answer = await inquirer.prompt({
//             name: "continueTransaction",
//             type: "confirm",
//             message: chalk.cyan.bold("Do you want to perform another transaction?"),
//         })

//         if (answer.continueTransaction) {
//             continueTransaction = true;
//         } else {
//             continueTransaction = false;
//             console.log(chalk.bold.italic.red(`Thank you for using the calculator.`))
//             console.log(chalk.bold.italic.green(`Created by: Ahmad Hassan CH , PROGRAMING COMMUNITIES`))
//         }
//     }
// }

// calculator();