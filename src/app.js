import store from './data/store.js';
import ProductList from './product-set.js';
import { renderChoice } from './render-choices.js';

const instructions = document.getElementById('instructions-box');
const startButton = document.getElementById('start-button');
const quizSection = document.getElementById('quiz-section');
const buttonContainer = document.getElementById('button-container');
// const resultSection = document.getElementById('result-table');

startButton.addEventListener('click', startTest);

const products = store.getProducts();
const masterProductsList = new ProductList(products);
const standByList = [];

generateFirstChoice();

const displayList = new ProductList(products);
for(let i = 0; 0 < standByList.length; i++) {
    displayList.removeById(standByList[i].id);
}



function generateFirstChoice() {
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
}

function startTest() {
    instructions.classList.add('hidden');
    quizSection.classList.remove('hidden');
}