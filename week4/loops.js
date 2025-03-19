// Simple program to check numbers and use while and do-while loops

let number = 5;  // You can change this number to test different cases

// If statement to check if the number is positive, negative, or zero
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Using a while loop to print numbers from 1 to the given number
let counter = 1;
console.log("\nCounting from 1 to " + number + " using while loop:");

while (counter <= number) {
    console.log(counter);  // Print the current value of counter
    counter++;  // Increment the counter
}

// Using a do...while loop to print numbers from 1 to the given number
let doWhileCounter = 1;
console.log("\nCounting from 1 to " + number + " using do...while loop:");

do {
    console.log(doWhileCounter);  // Print the current value of counter
    doWhileCounter++;  // Increment the counter
} while (doWhileCounter <= number);
