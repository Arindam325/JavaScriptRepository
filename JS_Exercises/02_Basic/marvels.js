const superHeroes = ['Iron Man', 'Spider Man', 'Capt. America'];

console.log(superHeroes);
console.log(superHeroes[0]);
console.log(superHeroes[superHeroes.length - 1]);

console.log(`There is ${superHeroes.length} superheroes.`);

//Manipulate Array
const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

numbers[1] = 'New Two';
console.log(numbers);

//Shift - delete from head
console.log('Shifted numbers : ',numbers.shift());
console.log(numbers);

//Unshift - add at head
console.log('Length after Unshift numbers : ', numbers.unshift('Zero'));
console.log(numbers);

//POP - Remove Last value
console.log('POP value : ', numbers.pop());
console.log(numbers);

//PUSH - Add at tail
console.log('Length after Push numbers : ',numbers.push('Seven'));
console.log(numbers);

// Splice - Delete from Middle
console.log('Splice value ',numbers.splice(2, 1, 'New Value'));
console.log(numbers);
