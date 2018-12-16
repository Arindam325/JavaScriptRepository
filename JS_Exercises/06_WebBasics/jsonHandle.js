const student = {
    name: 'John',
    age: '20',
    isActive: true
};

const studentAsString = JSON.stringify(student);
console.log(typeof studentAsString);
localStorage.setItem('student', studentAsString);

const studentAsJson = JSON.parse(studentAsString);
console.log(typeof studentAsJson);
