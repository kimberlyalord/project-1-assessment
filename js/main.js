const addButton = document.getElementById('plus-button');
const subtractButton = document.getElementById('minus-button');
let input = document.querySelector('input');
let counter = document.getElementById('counter');
let total = 0;

window.addEventListener('load', (event) => {
    counter.innerHTML = `0`;
    input.value = `1`;
});

addButton.addEventListener('click', addInteger);

subtractButton.addEventListener('click', subtractInteger);

function changeColor() {
    if(total < 0) {   
        counter.style.color = 'red';
    } else counter.style.color = 'black';
}

function addInteger() {
    total += parseInt(input.value);
    counter.innerHTML = total;
    changeColor();
}

function subtractInteger() {
    total -= parseInt(input.value);
    counter.innerHTML = total;
    changeColor();
}