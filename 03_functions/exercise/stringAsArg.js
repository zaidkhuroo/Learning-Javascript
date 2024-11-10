function mystring(str) {
    let count = 0;
    for (const char of str) {
        if (char == "a" || char == "i" || char == "e" || char == "o" || char == "u") {
            count++;
        }
    }
    return count;
}

let a = mystring("mybeard");
console.log(a);

// with arrow function

let string = (str) => {
    let count=0;
    for (const char of str) {
        if (char == "a" || char == "i" || char == "e" || char == "o" || char == "u") {
            count++;
        }
    }
    return count;
};


console.log(string("World"));
