# JavaScript Data Types and Logical Operations

This document explains the usage of various data types, logical operations, and conditional statements in JavaScript. Each section includes code examples and comments for clarity.

---

## String Data Type
Strings are used to store text values.

```javascript
let firstName: string = "Ali"; // Declares a string variable named firstName and assigns it the value "Ali".
let lastName: string = "Khan"; // Declares a string variable named lastName and assigns it the value "Khan".
```

---

## Boolean Data Type
Booleans store true or false values.

```javascript
let isStudent: boolean = true; // Declares a boolean variable named isStudent and assigns it the value true.
```

---

## Undefined Data Type
Undefined indicates a variable that has been declared but not assigned a value.

```javascript
let unassigned: undefined; // Declares a variable named unassigned with the type undefined, but it is not assigned a value.
```

---

## Null Data Type
Null is a special value indicating that a variable is empty or has an unknown value.

```javascript
let empty: null = null; // Declares a variable named empty and explicitly assigns it the value null.
```

---

## Logical Operations
Logical operators are used to perform logical operations such as AND, OR, and NOT.

### Example Code:
```javascript
let n = 5; // Declares a variable n and assigns it the value 5.

// Logical AND (&&) operator
console.log(n >= 5 && n < 10); // true: n is greater than or equal to 5 AND less than 10.
console.log(n > 5 && n < 10);  // false: n is NOT greater than 5 but is less than 10.

// Logical OR (||) operator
console.log(n >= 5 || n < 10); // true: n is greater than or equal to 5 OR less than 10.
console.log(n > 5 || n < 10);  // true: n is NOT greater than 5 but is less than 10.

// Logical NOT (!) operator
console.log(!(n < 10)); // false: n is less than 10, so NOT operation makes it false.
console.log(!(n > 10)); // true: n is NOT greater than 10, so NOT operation makes it true.
```

---

## Conditional Statements
Conditional statements control the flow of execution based on certain conditions.

### Example Code:
```javascript
let myName: string = "ahmed"; // Declares a string variable myName and assigns it "ahmed".
let myAge: number = 12;        // Declares a number variable myAge and assigns it 12.

// Checks conditions using if-else statements
if (myName == "Hassan" || myAge == 15) {
    console.log("Hello Hassan"); // This block executes if myName is "Hassan" OR myAge is 15.
} else if (myName == "Ali" || myAge == 13) {
    console.log("Hello Ali");    // This block executes if myName is "Ali" OR myAge is 13.
} else {
    console.log("Hello Stranger"); // This block executes if none of the above conditions are met.
}
```

---

## Summary
This document demonstrated how to work with various JavaScript data types, logical operators, and conditional statements. The examples illustrate common usage scenarios for each concept.

