const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

for(let i=0; i<days.length; i++){
    console.log(days[i]);
}

const todos = [];
todos.push('Buy bread');
todos.push('Record a Youtube videos');
todos.push('Go to Gym');

todos.forEach(function(todo, i){
    console.log(`Your task no. ${i+1} is : ${todo}`);
});

const todosRev = [];
todosRev.unshift('Buy bread');
todosRev.unshift('Record a Youtube videos');
todosRev.unshift('Go to Gym');

todosRev.forEach(function(todo, i){
    console.log(`Your task no. ${i+1} is : ${todo}`);
});