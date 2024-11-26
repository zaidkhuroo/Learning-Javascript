data="shhh";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    view(){
console.log("i got displayed")
    }
}

class Admin extends User{
    editdata(){
console.log("I have been modified");
    }
}
let student1=new User("zaid","gmail");
let student2=new User("adnan","rediff");
let admin=new Admin("hero","mailer");