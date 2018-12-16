let getMyGrade = function(currentMarks=0, totalMarks=0){
    let percentage = (currentMarks/totalMarks)*100;
    let myGrade = '';

    if(percentage>=90)
        myGrade = 'A';
    else if(percentage>=80)
        myGrade = 'B';
    else if(percentage>=70)
        myGrade = 'C';
    else if(percentage>=60)
        myGrade = 'D';
    else
        myGrade = 'F';
    
    return `Your grade is ${myGrade} and percentage is ${percentage} `;             
}

console.log(getMyGrade(434, 500));
