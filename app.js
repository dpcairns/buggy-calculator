import { add, subtract } from './mathUtils.js';

const addButton = document.getElementById('sum-button');

addButton.addEventListener('click', () => {
    // post-click logic goes here!
    const input1 = document.getElementById('add-one');
    const input2 = document.getElementById('add-two');
    const resultSpan = document.getElementById('sum-result');

    console.log(input1.value);
    console.log(input2.value);
    const firstNumber = Number(input1.value);
    const secondNumber = Number(input2.value);
    const sum = add(firstNumber, secondNumber);

    console.log(sum);
    resultSpan.textContent = sum;

});
const subButton = document.getElementById('sub-button');

subButton.addEventListener('click', () => {
    // post-click logic goes here!
    const input1 = document.getElementById('minus-one');
    const input2 = document.getElementById('minus-two');
    const resultSpan = document.getElementById('sub-result');

    console.log(input1.value);
    console.log(input2.value);
    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);
    const sub = subtract(firstValue, secondValue);

    console.log(sub);
    resultSpan.textContent = sub;

});
const multiButton = document.getElementById('multi-button');

multiButton.addEventListener('click', () => {
    // post-click logic goes here!
    const input1 = document.getElementById('multi-one');
    const input2 = document.getElementById('multi-two');
    const resultSpan = document.getElementById('multi-result');

    console.log(input1.value);
    console.log(input2.value);
    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);
    const multi = firstValue * secondValue;

    console.log(multi);
    resultSpan.textContent = multi;

});
const divButton = document.getElementById('div-button');

divButton.addEventListener('click', () => {
    // post-click logic goes here!
    const input1 = document.getElementById('div-one');
    const input2 = document.getElementById('div-two');
    const resultSpan = document.getElementById('div-result');

    console.log(input1.value);
    console.log(input2.value);
    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);
    const div = firstValue / secondValue;

    console.log(div);
    resultSpan.textContent = div;

});