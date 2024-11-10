function myfun() {
    console.log('Hello function');
    console.log('Bye function');
}
myfun();

// with param

function myfun(msg) {
    console.log(msg);
}

myfun("Function with param");

// sum function
function sum(a, b) //a and b are local variables to this function
 {
    c = a + b;
    return c;
}
let total = sum(2, 4);
console.log(total);