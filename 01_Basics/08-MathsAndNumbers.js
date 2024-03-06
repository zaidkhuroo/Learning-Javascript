// Numbers
console.log('---------------Numbers---------------');

// Declare a variable 'goals' and initialize it with the value 5
let goals = 5;
console.log(goals);

// Create a new Number object 'bal' and initialize it with the value 200
const bal = new Number(200);
console.log(bal)

// Log the length of the string representation of 'bal'
console.log(bal.toString().length);

// Display the type of 'bal'
console.log(typeof (bal));

// Format 'bal' to a string with one digit after the decimal point
console.log(bal.toFixed(1));

// Declare a variable 'num' and initialize it with the value 19.793
let num = 19.793;

// Format 'num' to a string with a precision of 3
console.log(num.toPrecision(3));

const x = 1000000000
console.log(x.toLocaleString('en-IN'));


console.log('---------------Math---------------');

// Maths
console.log(Math.sqrt(90))
console.log(Math.min(2526, 7358, 234, 8967, 9123, 645, 3455));
console.log(Math.max(2526, 7358, 234, 8967, 9123, 645, 3455));
console.log(Math.ceil(19.7)); // Round up to the nearest integer
console.log(Math.floor(19.7)); // Round down to the nearest integer
console.log(Math.abs(-156)); // Get the absolute value
console.log(Math.random()); // Generate a random floating-point number between 0 and 1
console.log(Math.random() * 10); // Generate a random floating-point number between 0 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Generate a random integer between 1 and 10

const min = 5;
const max = 12;

console.log(Math.floor(Math.random() * 10 + 2)); // Generate a random integer between 2 and 11
console.log(Math.ceil(Math.random() * 10 + 2)); // Generate a random integer between 2 and 12
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Generate a random integer between min and max