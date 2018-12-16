const john = {
    name : 'John Doe',
    age : '29',
    isActive : 'true'
};

const jane = {
    name : 'Jane Doe',
    age : '28',
    isActive : 'true'
};

const johnny = {
    name : 'Johnnny Doe',
    age : '5',
    isActive : 'false'
};

let users = new Map();
console.log('type of users ',typeof users);
users.set('john', john);
users.set('jane', jane);
users.set('johnny', johnny);
console.log('users ', users);
console.log('number of users ', users.size);
console.log('keys of users ', users.keys());
console.log('values of users ',users.values());
console.log('get john form users ', users.get('john'));

for (const key of users.keys()) {
    console.log('key : ', key, ', value : ',users.get(key));
}

for (const [key, value] of users.entries()) {
    console.log('key : ', key, ', value : ',value);
}

users.forEach((value, key)=>console.log('key : ', key, ', value : ',value));

const arrOfArr = [['one', 1], ['two', 2], ['three', 3]];
let newMap = new Map(arrOfArr);
console.log('newMap ',newMap);
