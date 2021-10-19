const inputElem = document.querySelector('#inputElem');
const addBtn = document.querySelector('#addBtn');
const itemsElem = document.querySelector('#items');

const items = [];

const logInp = (e) => {
    e.preventDefault();
    // console.log(inputElem.value);
    items.push(inputElem.value);
    inputElem.value = '';

    logUnique(items);
}

const logUnique = (items) => {
    const uniqueItems = new Set(items);
    console.log(uniqueItems);
    
    itemsElem.innerHTML = '';
    createElems(uniqueItems);
}

const createElems = (items) => {
    items.forEach(item => {

        const itemElem = document.createElement('span');
        itemElem.classList.add('item');
        itemElem.innerText = item;

        itemsElem.appendChild(itemElem);
    });
}

addBtn.addEventListener('click', logInp);