import store from './data/store.js';
import ProductList from './product-set.js';
import { renderChoice } from './render-choices.js';

const instructions = document.getElementById('instructions-box');
const startButton = document.getElementById('start-button');
const quizSection = document.getElementById('quiz-section');
const buttonContainer = document.getElementById('button-container');
const chosenButton = document.getElementsByClassName('product-choice');
const messageDisplay = document.getElementById('user-message');
const resultSection = document.getElementById('result-table');

let counter = 0;

startButton.addEventListener('click', startTest);

const products = store.getProducts();
const masterProductsList = new ProductList(products);
let standByList = [];

generateFirstChoice();

function startTest() {
    instructions.classList.add('hidden');
    quizSection.classList.remove('hidden');
    messageDisplay.textContent = counter + ' / 25';
}

function generateFirstChoice() {
    counter++;  

    const productOne = masterProductsList.getRandomProduct();
    standByList.push(productOne);
    const displayList = new ProductList(products);
    displayList.removeById(productOne.id);
    const productTwo = displayList.getRandomProduct();
    standByList.push(productTwo);
    displayList.removeById(productTwo.id);
    const productThree = displayList.getRandomProduct();
    standByList.push(productThree);
    displayList.removeById(productThree.id);
    

    buttonContainer.appendChild(renderChoice(productOne));
    buttonContainer.appendChild(renderChoice(productTwo));
    buttonContainer.appendChild(renderChoice(productThree));

    chosenButton[0].addEventListener('click', reloadChoices);
    chosenButton[1].addEventListener('click', reloadChoices);
    chosenButton[2].addEventListener('click', reloadChoices);
}

function reloadChoices() {
    counter++;
    messageDisplay.textContent = counter + ' / 25';

    const displayList = new ProductList(products);
    for(let i = 0; i < standByList.length; i++) {
        displayList.removeById(standByList[i].id);
    }

    standByList = [];
    
    const productOne = displayList.getRandomProduct();
    standByList.push(productOne);
    displayList.removeById(productOne.id);
    const productTwo = displayList.getRandomProduct();
    standByList.push(productTwo);
    displayList.removeById(productTwo.id);
    const productThree = displayList.getRandomProduct();
    standByList.push(productThree);
    displayList.removeById(productThree.id);

    while(buttonContainer.firstChild) {
        buttonContainer.removeChild(buttonContainer.firstChild);
    }

    buttonContainer.appendChild(renderChoice(productOne));
    buttonContainer.appendChild(renderChoice(productTwo));
    buttonContainer.appendChild(renderChoice(productThree));

    chosenButton[0].addEventListener('click', reloadChoices);
    chosenButton[1].addEventListener('click', reloadChoices);
    chosenButton[2].addEventListener('click', reloadChoices);

    if(counter > 25) {
        quizSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
        messageDisplay.textContent = 'Thank you for your time!';
    }

}