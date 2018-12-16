
var whoIsUser = 'user';

if(whoIsUser === 'user'){
    console.log('This is a user. Allow access to all courses');
}
else if(whoIsUser === 'teachers'){
    console.log('This is a treacher. Allow access to his courses.');
}
else{
    console.log('Message: Verify email first.');
}

/*
GRADE PROBLEM:
10 - AMAZING
5 - GOOD
3 - POOR
0 - FAIL
*/

var marksObtain = 10;
if(marksObtain ===  10){
    console.log('AMAZING marks');    
}
else if(marksObtain ===  5){
    console.log('GOOD marks');    
}
else if(marksObtain ===  3){
    console.log('POOR marks');    
} 
else if(marksObtain ===  0){
    console.log('FAIL marks');    
}