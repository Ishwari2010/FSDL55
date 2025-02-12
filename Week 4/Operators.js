// Arithmetic Operators
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;          // Addition
let difference = num1 - num2;   // Subtraction
let product = num1 * num2;      // Multiplication
let quotient = num1 / num2;     // Division
let remainder = num1 % num2;    // Modulus

console.log("Arithmetic Operations:");
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);

// Assignment Operators
let x = 10;
x += 5;  // x = x + 5
x -= 3;  // x = x - 3
x *= 2;  // x = x * 2
x /= 4;  // x = x / 4

console.log("\nAssignment Operations:");
console.log("x after operations: " + x);

// Comparison Operators
let a = 5;
let b = 10;

console.log("\nComparison Operations:");
console.log("a == b: " + (a == b)); // false
console.log("a != b: " + (a != b)); // true
console.log("a > b: " + (a > b));   // false
console.log("a < b: " + (a < b));   // true
console.log("a >= b: " + (a >= b)); // false
console.log("a <= b: " + (a <= b)); // true

// Logical Operators
let isTrue = true;
let isFalse = false;

console.log("\nLogical Operations:");
console.log("isTrue && isFalse: " + (isTrue && isFalse)); // false
console.log("isTrue || isFalse: " + (isTrue || isFalse)); // true
console.log("!isTrue: " + !isTrue); // false

// String Concatenation
let firstName = "Ishwari";
let lastName = "Shinde";
let fullName = firstName + " " + lastName;

console.log("\nString Concatenation:");
console.log("Full Name: " + fullName);

// Ternary Operator
let age = 11;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you can't vote.";

console.log("\nTernary Operator:");
console.log(canVote);
