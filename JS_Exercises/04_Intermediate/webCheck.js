
let checkUser = function(user=''){
    if(user.includes('123') && user.length>=6)
        return true;
    else
        return false;
}

let checkPassword = function(password=''){
    if(password.includes('1234') && password.length>8)
        return true;
    else
        return false;     
}

console.log(checkUser('abcde12345'));
console.log(checkPassword('abcde12345'));