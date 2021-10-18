const inputElem = document.querySelector('#inputElem');
const addBtn = document.querySelector('#addBtn');

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
}

addBtn.addEventListener('click', logInp);
