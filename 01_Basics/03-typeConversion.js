// Assign the string 'zaid' to variable 'a'
let a = 'zaid' // string

// Display the data type of variable 'a'
console.log(typeof(a)) // string

// Convert the string 'zaid' to a number and assign it to variable 'b'
let b = Number(a) // number.

// Display the value of variable 'b'
console.log(b) // NaN

// Display the data type of variable 'b'
console.log(typeof(b)) // number

console.log("=====================================");

// --------------------------------

// Assign the boolean value 'true' to variable 'z'
let z = true // boolean

// Display the data type of variable 'z'
console.log(typeof(z)) // boolean

// Convert the boolean value 'true' to a string and assign it to variable 'y'
let y = String(z) // string

// Display the value of variable 'y'
console.log(y) // "true"

// Display the data type of variable 'y'
console.log(typeof(y)) // string

// --------------------------------

console.log("=====================================");

// Assign the string 'zaid' to variable 'd'
let d = 'zaid' // string

// Display the data type of variable 'd'
console.log(typeof(d)) // string

// Convert the string 'zaid' to a boolean and assign it to variable 'e'
let e = Boolean(d) // boolean

// Display the value of variable 'e'
console.log(e) // true

// Display the data type of variable 'e'
console.log(typeof(e)) // boolean

// --------------------------------

console.log("=====================================");

let n = "33a" // string
let o = Number(n) // number
console.log(o) // 33
console.log(typeof(o)) // number

// --------------------------------

console.log("=====================================");

let bol = 0 // number
let top = Boolean(bol) // boolean
console.log(top) // false
console.log(typeof(top)) // boolean


console.log("=====================================");
// The 'console.log' function is used to print the output of expressions to the console.

// This line prints the boolean value 'true' converted to a number (1)
console.log(+true); // 1

// This line tries to convert an empty string to a number, resulting in 0
console.log(+""); // 0

// This line tries to convert the string 'zaid' to a number, which results in NaN (Not-a-Number)
console.log(+'zaid'); // NaN

// This line performs numeric addition of two numbers: 2 + 2
console.log(2+2); // 4

// This line concatenates the string '2' with the number 2 and then with the string '3',
// resulting in '223'
console.log('2'+ 2+3); // '223'

// This line performs numeric addition of 9 and 11 and then concatenates the result with the string '32'
console.log(9+11+'32'); // '2032'
