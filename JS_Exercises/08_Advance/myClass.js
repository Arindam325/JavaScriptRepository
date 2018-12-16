
class User{
    constructor(firstname, lastname, credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }

    getFullName(){
        return `My full name is ${this.firstname} ${this.lastname}`;
    }

    setName(fullname=''){
        const name = fullname.split(' ');
        this.firstname = name[0];
        this.lastname = name[1];
    }
}

class Teacher extends User{
    constructor(firstname, lastname, credit, subject){
        super(firstname, lastname, credit);
        this.subject = subject;
    }

    getFullName(){
        return `My full name is ${this.firstname} ${this.lastname}.`;
    }
    
    toString(){
        //return `My full name is ${this.firstname} ${this.lastname} and I teach ${this.subject}`; 
        return `Teacher[x=${this.firstname}]`;
    }

    get [Symbol.toStringTag]() {
        return "Teacher";
    }
}

let john = new Teacher('John', 'Anderson', 100, 'JavaScript');
console.log(john.getFullName());
john.setName('John Wick');
//console.log(john.getFullName());
console.log(john);

