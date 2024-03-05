// primitive 
// String, number, boolean, NULL, Undefined, Symbol, Big Int

const marks= 100
console.log(typeof marks);

let zaid;
console.log(zaid);   // undefined

let stringID= Symbol(12)
let stringIDS=Symbol(12)
console.log(stringID === stringIDS);    // false

let BigNo=1223421323n
console.log(typeof  BigNo);             // bigint


console.log("-----------------------------------");
// Non-primitive
//  Objects, Functions, Arrays

const arr = ['Zaid', 'Bin', 'Farooq'];
console.log(typeof arr);                     // object
let human = {
    name:"zaid",
    dob:1998,
    age:26,
}
console.log(typeof human);                   // object


let fun= function showMessage(){
    console.log("Hello Boss");
}
console.log(typeof fun);                      // function

// Dynamic Typing in JavaScript