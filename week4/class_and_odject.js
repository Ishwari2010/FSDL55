// Class definition
class Person {
    // Constructor to initialize properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to greet
    greet() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}

// Creating an object (instance of the Person class)
let person1 = new Person("Ishwari", 19);
let person2 = new Person("Vaishnuvi", 19);

// Calling the method on the objects
person1.greet();  // Output: Hello, my name is Alice and I am 30 years old.
person2.greet();  // Output: Hello, my name is Bob and I am 25 years old.
