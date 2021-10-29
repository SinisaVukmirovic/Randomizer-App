const app = document.querySelector('.app');


const addBtn = app.querySelector('#addBtn');
const itemsElem = app.querySelector('#items');
const startBtn = app.querySelector('#startBtn');
const resetBtn = app.querySelector('#resetBtn');

const speech = document.querySelector('speech');

let items = [];

const addItem = (e) => {
    e.preventDefault();
    const inputElem = document.querySelector('#inputElem');

    if (inputElem.value == '') return;
    items.push(inputElem.value);
    
    inputElem.value = '';

    makeItemsUnique(items);
}

const makeItemsUnique = (items) => {
    const uniqueItems = new Set(items);
    // Set uses size not lenght
    if (uniqueItems.size > 1) startBtn.disabled = false;
    
    itemsElem.innerHTML = '';
    createItemElems(uniqueItems);
}

const createItemElems = (items) => {
    items.forEach(item => {
        const itemElem = document.createElement('span');
        itemElem.classList.add('item');
        itemElem.innerText = item;

        itemsElem.appendChild(itemElem);
    });
}

const randomSelect = () => {
    resetBtn.disabled = true;
    const timesToHighlight = (items.length * 1.5) ;

    const interval = setInterval(() => {
        const randomItem = pickRandomItem();

        highlightItem(randomItem);

        setTimeout(() => {
            unHighlightItem(randomItem);
        }, 150);
    }, 150);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomItem = pickRandomItem();

            highlightItem(randomItem);
            resetBtn.disabled = false;
        }, 150);
        

    }, timesToHighlight * 150);
}

const pickRandomItem = () => {
    startBtn.disabled = true;
    resetBtn.disabled = true;
    const items = itemsElem.querySelectorAll('.item');

    return items[Math.floor(Math.random() * items.length)];
}

const highlightItem = (item) => {
    item.classList.add('js-highlight');
}

const unHighlightItem = (item) => {
    item.classList.remove('js-highlight');
}

const resetApp = () => {
    items = [];
    itemsElem.innerHTML = '';
}

addBtn.addEventListener('click', addItem);

startBtn.addEventListener('click', randomSelect);

resetBtn.addEventListener('click', resetApp);