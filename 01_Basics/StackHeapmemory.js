// Stack(Primitive)                
// +-------------------------------+

let myname = 'zaid';
let name = myname;
name = 'Alpha';
console.log(myname); // Output: zaid
console.log(name);   // Output: Zaid



// Heap(Non-primitive)
let demo = {
    name: 'zaid',
    age: 25
}
let trailer = demo;
trailer.age = 30;
console.log(demo.age);   //Output : 30
console.log(demo.name);