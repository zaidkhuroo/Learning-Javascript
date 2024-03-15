console.log("hello");

    const obj={
        age:12,
        name:"John",
        full_name:{
            first:'zaid',
            last:'bin farooq'
        }
    }
console.log(obj.full_name.first);

const object1={1:'a',2:'b',3:'c'}
const object2={4:'a',5:'b',6:'c'}
const object3={7:'a',8:'b',9:'c'}

let object_mix=Object.assign({},object1,object2,object3) // merging objects 
let object_mix2={...object1,...object2,...object3}   //es6 method to merge objects
console.log(object_mix2);

console.log(object_mix); //cre  
console.log(Object.keys(obj)); //returns an array of the object’s own enumerable property names
console.log(Object.values(obj))// returns an array of the values of all the properties of an object
console.log(Object.entries(obj)) //returns an array of [key,value] pairs for every entry in an object.