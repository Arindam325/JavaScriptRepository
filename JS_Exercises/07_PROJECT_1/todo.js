//alert('Working'); 
let addButton = document.getElementById('add');
addButton.addEventListener('click', ()=>{
    let input = document.querySelector('#input');
    let item = input.value;
    //console.log('Entered Item : ', item);
    let ulEle = document.getElementById('list');

    let liEle = document.createElement('li');
    liEle.className = 'mycheck';
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'check';
    let label = document.createElement('label');
    label.textContent = item;
    liEle.appendChild(checkBox);
    liEle.appendChild(label);
    //ulEle.insertBefore(liEle, ulEle.childNodes[0]);
    ulEle.prepend(liEle);
    setTimeout(() => {
        liEle.classList = 'visual';
    }, 5);

    input.value='';
});

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click', ()=>{
    let ulEle = document.getElementById('list');
    let liElements = ulEle.children;
    for (let index = 0; index < liElements.length; index++) {
        while(liElements[index] && liElements[index].children[0].checked){
            ulEle.removeChild(liElements[index]);
        }
    }
});