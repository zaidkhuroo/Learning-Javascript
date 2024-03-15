let my_object = 
{ 
    age: 26,
    name:'zaid',
    email:'zaidkhuroo@gmail.com',
    address:'Sopore',
    present:true
}
const {email:em} = my_object ; //this will give the value of email in variable em and remove it from object. Also known as destructure property.
// console.log(email)
console.log(em); // em will be used print the value, as we have set em insteasd of email property from object using destructuring assignment