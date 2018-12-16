const sayHello = (name) => `Say Hello ${name}`;

console.log(sayHello('Arindam'));


const todos = [
    {
        title: 'Buy Bread',
        isDone: false
    },
    {
        title: 'Go to Gym',
        isDone: false
    },
    {
        title: 'Record Youtube Video',
        isDone: true
    },
];

const thingsDone = todos.filter((value, index)=>value.isDone===true);

console.log(thingsDone);
