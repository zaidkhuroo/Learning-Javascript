let myarr = [1, 2, 3, 4];
myarr.forEach((val, idx, myarr) => {  
    // forEach iterates through each element in `myarr`
    // val: the current element in the array
    // idx: the index of the current element
    // myarr: the original array being iterated over

    console.log(val, idx, myarr);  
    
});

// practice
let mynumbers = [1, 2, 3, 4];
let square=0;
mynumbers.forEach((sqr) => { 

square =sqr*sqr;
console.log(square); 

});


// other method

let myar = [1, 2, 3, 4];
myar.forEach((sqr) => { 

console.log(sqr*sqr); 

});