let myarr = [1, 2, 3, 4];
myarr.forEach((val, idx, myarr) => {  
    // forEach iterates through each element in `myarr`
    // val: the current element in the array
    // idx: the index of the current element
    // myarr: the original array being iterated over

    console.log(val, idx, myarr);  
    
});