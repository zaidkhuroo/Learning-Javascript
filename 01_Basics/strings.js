
        // Assigning string values to variables 'a', 'b', 'c', 'u'
var a = 'zaid'; //strings
var b = 'bin';//strings
var c = 'farooq';//strings
var u = "I am zaid";//strings

// Concatenating and logging the string values of 'a', 'b', and 'c'
console.log("my name is " + (a + b + c)); //concatenate

// Assigning the length of variable 'a' to 'x'
var x = a.length;

// Using u.indexOf() to find the position/index of the first occurrence of 'z' in 'u'
var pos = u.indexOf('z'); //to check position/index of z

// Logging the position of 'z' and the length of 'a'
console.log(pos);
console.log('length of a is: ' + x);

// Replacing the first occurrence of 'zaid' with 'ZaId' in 'u' and logging the result
var repl = u.replace('zaid', 'ZaId'); //using u.replace() to replace string 
console.log(repl);

// Concatenating ' bin farooq' to the end of 'u' and logging the result
var concat = u.concat(' bin farooq'); // using u.concat() for concatenation
console.log(concat);
   
     