let iAmGlobal = 'some Value';

if(true){
    iAmGlobal = 'some More Global Value';
    let iAmLocal = 'some More Local Value';
    console.log('Inside block: ',iAmGlobal);
    console.log('Inside block: ', iAmLocal);    
}

console.log('Outside block: ',iAmGlobal);
//console.log('Outside block: ', iAmLocal);    
