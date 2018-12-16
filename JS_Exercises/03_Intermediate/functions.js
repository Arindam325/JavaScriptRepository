console.log();

let fullNameMaker = function(firstName, lastName){
    console.log('Inside fullNameMaker ');
    console.log(`The full Name is ${firstName} ${lastName}`);    
}

fullNameMaker('John', 'Doe');

let myAdder = function(num1, num2){
    return num1 + num2;
}

console.log('Addition value is : ',myAdder(5, 3));

let myMultiplier = function(num1, num2){
    return num1* num2;
}

console.log('Multiplication is : ',myMultiplier(5, 10));

let guestUser = function(name= 'NoOne', courseCount=0){
    return 'Hello '+name+' and your course count is '+courseCount;
}

console.log(guestUser());