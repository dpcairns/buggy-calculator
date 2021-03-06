import { addition, subtraction } from './math-Utils.js';

const addButton = document.getElementById('sum-button');

addButton.addEventListener('click', () => {
    // post-click logic goes here!
    const input1 = document.getElementById('add-one');
    const input2 = document.getElementById('addtwo');
    const resultSpan = document.getElementById('sum-span');

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
    const resultSpan = document.getElementById('sub');

    console.log(input1.value);
    console.log(input2.value);
    const firstValue = Number(input1);
    const secondValue = Number(input2);
    const sub = subtract(secondValue, firstValue);

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
    const firstValue = Number(input1.number);
    const secondValue = Number(input2.number);
    const multi = firstValue * secondValue;

    console.log(multi);
    resultSpan.textContent = multi;

});
const divButton = document.getElementById('div-button');

divButton.addEventListener('click', () => {
    // post-click logic goes here!
    const input1 = document.getElementById('one');
    const input2 = document.getElementById('two');
    const resultSpan = document.getElementById('div-result');

    console.log(input1.value);
    console.log(input2.value);
    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);
    const div = secondValue / firstValue;

    console.log(div);
    resultSpan.textContent = div;

});