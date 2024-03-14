
let new_symbol = Symbol( "new symbol" );
let my_obj = { 
    age: 26,
    [new_symbol]: 'I am the value of new symbol',
    name:'zaid',
    email:'zaidkhuroo@gmail.com',
    address:'Sopore',
    present:true
}

console.log(my_obj); // accessing the property of an object using dot notation
console.log(my_obj['name']);
// console.log(my_obj.city); will give error because there is no such key in this object
console.log(my_obj.address);
console.log(typeof(my_obj.address)); 
console.log(typeof(my_obj.name)); //  it returns string as we are getting data from a string
console.log(my_obj.present);
console.log(typeof(my_obj.present));
console.log(Object.keys(my_obj)) ; // returns all the keys of an object as an array
console.log(my_obj[new_symbol]);
console.log(typeof(my_obj[new_symbol]));

my_obj.email= 'zaid@mail.com' //  adding a new property to the existing object
console.log(my_obj.email); //  access newly added property
Object.freeze(my_obj.email) ; // making the obj .email property non-configurable , writable and enumerable false
my_obj.email= 'abc@mail.com' // changing the value of already existing property(in this case it won't apply as the property is already freezed)
