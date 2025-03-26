// Prompt the user to enter a number
let number = prompt("Enter a number:");

// Convert the input to an integer
number = parseInt(number);

// Check if the number is even or odd
if (number % 2 === 0) {
    alert(number + " is an even number.");
} else {
    alert(number + " is an odd number.");
}
