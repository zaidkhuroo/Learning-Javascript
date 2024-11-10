const my_array = ['zaid', 'bin', 'farooq']
const my_array2 = ['is', 'coding']
console.log("-------------------------------------\n");
let all_name = [...my_array, ...my_array2] // using spread operator to combine two arrays 
console.log(all_name);
console.log("-------------------------------------\n");
my_array.push(my_array2) //  adding array as an element of another array
console.log(my_array); // ['zaid','bin', 'farooq', [ 'is', 'coding' ]]
my_array.concat(my_array2) //  this will not add the array as an element but it will join them together
console.log(my_array);
console.log("-------------------------------------\n");
let new_array = [1, 2, 3, [4, 5, 6, 7], 8, 9, [10, 11, [12, 13,], 14, 15], 16]; // nested array example
console.log(new_array.flat(6));// flattening the array by removing nested array and keep the elements in one dimension
let arr1 = 200
let arr2 = 300
let arr3 = 400
console.log("-------------------------------------\n");
console.log(Array.of(arr1, arr2, arr3)); //  creating a new array with given elements
console.log("-------------------------------------\n");
console.log(Array.isArray('Zaid')) //  false because string is not an array
console.log("-------------------------------------\n");
console.log(Array.from('Zaid'))    // ['Z', 'a', 'i', 'd']   converting a string into an array using from method.

// filter method
let myarr = [1, 2, 3, 4, 5];
let evenarray = myarr.filter((val) => {
    return val % 2 === 0;

});
console.log(evenarray);

// reduce method
let add = myarr.reduce((prev, curr) => {
    return prev + curr;

});

console.log(add);

// E.g 2
let greatestnum = myarr.reduce((prev, curr) => {
    if (prev > curr) {
        return prev;
    }
    else {
        return curr;
    }

    // other way
    // return prev>curr?prev:curr;
});

console.log(greatestnum);