/*
VALUES INTERPRETED AS FALSE
    false
    0
    null
    ''
    undefined
REST EVERYTHING ELSE IS TRUE
    true
    1, 123
    asd
    ' '
    {}, {a:123}
    [], [1,2,3]
*/

let boolVal = false;
let intVal = 0;
let nullVal = null;
let emptyVal = '';
let noVal;

boolVal ? console.log(`${boolVal} is considered as true`) : console.log(`${boolVal} s considered as false`);
intVal ? console.log(`${intVal} is considered as true`) : console.log(`${intVal} is considered as false`);
nullVal ? console.log(`${nullVal} is considered as true`) : console.log(`${nullVal} is considered as false`);
emptyVal ? console.log(`'' is considered as true`) : console.log(`'' is considered as false`);
noVal ? console.log(`${noVal} is considered as true`) : console.log(`${noVal} is considered as false`);

boolVal = true;
intVal = 123;
charVal = 'abc'
let spaceVal = ' ';
let emtyObj = {};
let obj = { num : 123 };
let emptyArr = [];
let arr = [1, 2, 3];

boolVal ? console.log(`${boolVal} is considered as true`) : console.log(`${boolVal} s considered as false`);
intVal ? console.log(`${intVal} is considered as true`) : console.log(`${intVal} is considered as false`);
charVal ? console.log(`${charVal} is considered as true`) : console.log(`${charVal} is considered as false`);
spaceVal ? console.log(`' ' is considered as true`) : console.log(`' ' is considered as false`);
emtyObj ? console.log(`${emtyObj} is considered as true`) : console.log(`${emtyObj} is considered as false`);
obj ? console.log(`${obj} is considered as true`) : console.log(`${obj} is considered as false`);
emptyArr ? console.log(`${emptyArr} is considered as true`) : console.log(`${emptyArr} is considered as false`);
arr ? console.log(`${arr} is considered as true`) : console.log(`${arr} is considered as false`);