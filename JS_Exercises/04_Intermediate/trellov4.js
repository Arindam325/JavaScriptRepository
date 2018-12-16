const todos = ['Buy Bread', 'Go to Gym', 'Record Youtube Video'];

console.log(todos.indexOf('Buy Bread'));

const newTodos = [
    {
        title: 'Buy Bread',
        isDone: false
    },
    {
        title: 'Go to Gym',
        isDone: false
    },
    {
        title: 'Recor Youtube Video',
        isDone: true
    },
];

let index = newTodos.findIndex(function(value, index){
    return value.title === 'Go to Gym';
});

console.log(newTodos[index]);

let findTodos = function(myTodos, title){
    const index = myTodos.findIndex(function(value, index){
        return value.title.toLowerCase() === title.toLowerCase();
    });
    return myTodos[index];
};

console.log(findTodos(newTodos, 'Buy bread'));
