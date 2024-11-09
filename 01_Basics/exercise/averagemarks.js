let marks = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < marks.length; i++) {

    sum = sum + marks[i];

}
console.log('sum: ', sum);
let average = sum / marks.length;
console.log('average: ', average);

// offer
let prices = [190, 2345, 455, 567, 127, 2345];
let offer = 0;
for (let val of prices) {
    offer = val / 10;
    val = val - offer;
    console.log(val);
}