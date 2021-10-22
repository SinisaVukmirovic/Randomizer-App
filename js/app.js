const app = document.querySelector('.app');

const addBtn = app.querySelector('#addBtn');
const itemsElem = app.querySelector('#items');
const startBtn = app.querySelector('#startBtn');

const items = [];

const logInp = (e) => {
    e.preventDefault();
    const inputElem = document.querySelector('#inputElem');

    if (inputElem.value == '') return;
    items.push(inputElem.value);
    
    inputElem.value = '';

    logUnique(items);
}

const logUnique = (items) => {
    const uniqueItems = new Set(items);
    // Set uses size not lenght
    if (uniqueItems.size > 1) startBtn.disabled = false;
    
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

const randomSelect = () => {
    const timesToHighlight = 40;

    const interval = setInterval(() => {
        const randomItem = pickRandomItem();

        highlightItem(randomItem);

        setTimeout(() => {
            unHighlightItem(randomItem);
        }, 200);
    }, 200);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomItem = pickRandomItem();

            highlightItem(randomItem);
        }, 200);
    }, timesToHighlight * 100);
}

const pickRandomItem = () => {
    const items = document.querySelectorAll('.item');

    return items[Math.floor(Math.random() * items.length)];
}

const highlightItem = (item) => {
    item.classList.add('js-highlight');
}

const unHighlightItem = (item) => {
    item.classList.remove('js-highlight');
}

startBtn.addEventListener('click', randomSelect);