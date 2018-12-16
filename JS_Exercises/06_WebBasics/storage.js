localStorage.setItem('hero', 'thor');
localStorage.setItem('todo', 'Buy new laptop');

let myHero = localStorage.getItem('hero');
console.log('create : ',myHero);

localStorage.setItem('hero', 'hulk');
myHero = localStorage.getItem('hero');
console.log('modify : ',myHero);

localStorage.removeItem('hero');
myHero = localStorage.getItem('hero');
console.log('delete : ',myHero);

localStorage.clear();
let myTodo = localStorage.getItem('todo');
console.log('clear : ',myTodo);


