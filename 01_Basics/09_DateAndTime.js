// let thisdate = new Date();
// console.log(thisdate);
// console.log(thisdate.toDateString());
// console.log(thisdate.toISOString());
// console.log(thisdate.toJSON());
// console.log(thisdate.toLocaleDateString());
// console.log(thisdate.toLocaleTimeString());
// console.log(thisdate.toString());
// console.log(thisdate.toUTCString());
// console.log("------------------------------");
// let mydate = new Date(2000, 4, 28, 5, 10); // month is 0-based so April is 3 and day of the week is 0
// console.log(mydate.toLocaleString());
// console.log("------------------------------");
// let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(mydate.getTime());
// console.log(Math.floor(Date.now()/1000));
// console.log("------------------------------");
// let thisthedate = new Date();
// console.log(thisthedate.getHours());
// console.log(thisthedate.getFullYear());
// console.log(thisthedate.getMonth() + 1);
// console.log(thisthedate.getTimezoneOffset());
// console.log(thisthedate.getUTCDate());
// console.log(thisthedate.getMinutes());


// Create a new Date object with the current date and time
let thisdate = new Date();

// Log the created Date object to the console
console.log(thisdate);

// Convert the Date object to a more readable string format (US English)
console.log(thisdate.toDateString());

// Convert the Date object to an ISO 8601 extended format string (YYYY-MM-DDTHH:mm:ss.sssZ)
console.log(thisdate.toISOString());

// Convert the Date object to a JSON format string
console.log(thisdate.toJSON());

// Convert the Date object to a more readable string format based on the current or specified locale
console.log(thisdate.toLocaleDateString());

// Convert the Date object to a more readable time format based on the current or specified locale
console.log(thisdate.toLocaleTimeString());

// Convert the Date object to a string using the built-in toString() method
console.log(thisdate.toString());

// Convert the Date object to a string in UTC format
console.log(thisdate.toUTCString());

// Add a horizontal rule to separate the output in the console
console.log("------------------------------");

// Create a new Date object with a specified year, month, day, hour, and minute
// Note: Month is 0-based, so April is 3 and day of the week is 0
let mydate = new Date(2000, 4, 28, 5, 10);

// Convert the Date object to a more readable string format based on the current or specified locale
console.log(mydate.toLocaleString());

// Add a horizontal rule to separate the output in the console
console.log("------------------------------");

// Get the current time as the number of milliseconds since the Unix Epoch (January 1, 1970 00:00:00 UTC)
let timeStamp = Date.now();

// Log the timestamp to the console
console.log(timeStamp);

// Get the time in milliseconds since the Unix Epoch (January 1, 1970 00:00:00 UTC) for the specified Date object
console.log(mydate.getTime());

// Get the number of seconds since the Unix Epoch (January 1, 1970 00:00:00 UTC)
console.log(Math.floor(Date.now()/1000));

// Add a horizontal rule to separate the output in the console
console.log("------------------------------");

// Create a new Date object with the current date and time
let thisthedate = new Date();

// Get the hours (24-hour format) for the specified Date object
console.log(thisthedate.getHours());

// Get the full year for the specified Date object
console.log(thisthedate.getFullYear());

// Get the month (0-11) for the specified Date object
console.log(thisthedate.getMonth() + 1);

// Get the time zone offset (in minutes) for the current locale
console.log(thisthedate.getTimezoneOffset());

// Get the day of the month (1-31) for the specified Date object using UTC
console.log(thisthedate.getUTCDate());

// Get the minutes (0-59) for the specified Date object
console.log(thisthedate.getMinutes());