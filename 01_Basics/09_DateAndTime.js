let thisdate = new Date();
console.log(thisdate);
console.log(thisdate.toDateString());
console.log(thisdate.toISOString());
console.log(thisdate.toJSON());
console.log(thisdate.toLocaleDateString());
console.log(thisdate.toLocaleTimeString());
console.log(thisdate.toString());
console.log(thisdate.toUTCString());
console.log("------------------------------");

let mydate = new Date(2022, 4, 28, 5, 10); // month is 0-based so April is 3 and day of the week is 0
console.log(mydate.toLocaleString());