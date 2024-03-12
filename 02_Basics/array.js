// Array
const myarray = [0, 1, 2, 3, 4, 5, 6, 11]
console.log(myarray);

console.log(myarray.concat([8, 9, 10]));

let newarray = new Array(34, 76, 12, 56, 78)
console.log(newarray)

// // array methods
myarray.push(12)
myarray.push(89)
console.log('before push', myarray);
myarray.pop(12) 
console.log('after pop', myarray);

console.log(myarray.includes(11)); //   return true or false if a value is in the array
myarray.unshift(9); //  add at the beginning of an array
console.log(myarray);
myarray.shift(0) //  remove from the beginning of an array
console.log(myarray);
console.log("array slice", myarray.slice(2, 6));     // from index 2 to 6 (not including 6)
// slice does not modify the original
console.log(myarray)
console.log("array splice", myarray.splice(4, 6));     // remove elements starting at index 2 and continue for 6 elements
// returns an array of removed elements
console.log('final array after splice', myarray)                    // splice modifies the original

console.log(myarray.includes(40)); //  return true or false if a value is in the array
console.log(myarray.includes(11)); //   return true or false if a value is in the array
console.log(myarray.indexOf(40)); //  return the first occurrence of a specified value 
//  or -1 if it's not present
let mynewarray = myarray.join() //  join all elements into one string with no separator

console.log(myarray);
console.log(mynewarray);
console.log(typeof (mynewarray)); // returns string because join turns it into one big string
