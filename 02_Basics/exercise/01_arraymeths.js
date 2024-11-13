let marks = [123, 3245, 5786, 234, 6879, 1234, 4567];
let scorer = marks.filter((curr) => {
    return curr > 300;

});
console.log(scorer);


// 2

function exercise() {
    let n = prompt("Enter a number");
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr[i - 1] = i;
    }
    console.log('array:', arr);

    let sum = arr.reduce((curr, val) => {
        return curr + val;
    });
    console.log('sum: ', sum);
    let product = arr.reduce((curr, val) => {
        return curr * val;
    });
    console.log('product: ', product);
}
exercise();