let addToDoButton = document.getElementById('input-button');
let toDoContainer = document.getElementById('listOfItems');
let inputField = document.getElementById('input-text');

addToDoButton.addEventListener('click', function (){
    var divElement = document.createElement('div');
    divElement.classList.add('div-element-style');

    var isChecked = document.createElement('input');
    isChecked.type = 'checkbox';
    isChecked.classList.add('checkbox-style');

    var span = document.createElement('span');
    span.classList.add('span-style');
    span.innerText = inputField.value;
    if(span.innerText === ''){
        alert('Type Something');
        return;
    }

    var hr = document.createElement('hr');

    var deleteButton = document.createElement('img');
    deleteButton.src = 'deleteIcon.png';
    deleteButton.alt = 'garbage basket';
    deleteButton.classList.add('delete-button-style');

    divElement.appendChild(isChecked);
    divElement.appendChild(span);
    divElement.appendChild(deleteButton);
    toDoContainer.appendChild(divElement);
    toDoContainer.appendChild(hr);

    inputField.value = '';
    isChecked.addEventListener('click', function (){
        if(isChecked.checked){
            span.style.textDecoration = 'line-through';
            span.style.color = 'gray';
        } else {
            span.style.textDecoration = '';
            span.style.color = 'black';
        }
    });
    deleteButton.addEventListener('click',function (){
        toDoContainer.removeChild(divElement);
        toDoContainer.removeChild(hr);
    })
})