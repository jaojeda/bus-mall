import store from './data/store.js';
import ProductList from './product-set.js';
import { renderChoice } from './render-choices.js';

const instructions = document.getElementById('instructions-box');
const startButton = document.getElementById('start-button');
const quizSection = document.getElementById('quiz-section');
const buttonContainer = document.getElementById('button-container');

startButton.addEventListener('click', startTest);

const products = store.getProducts();
const masterProductsList = new ProductList(products);

generateFirstChoice();


function generateFirstChoice() {
    const productOne = masterProductsList.getRandomProduct();
    const displayList = new ProductList(products);
    displayList.removeById(productOne.id);
    const productTwo = displayList.getRandomProduct();
    displayList.removeById(productTwo.id);
    const productThree = displayList.getRandomProduct();
    displayList.removeById(productThree.id);   

    buttonContainer.appendChild(renderChoice(productOne));
    buttonContainer.appendChild(renderChoice(productTwo));
    buttonContainer.appendChild(renderChoice(productThree));
}

function startTest() {
    instructions.classList.add('hidden');
    quizSection.classList.remove('hidden');
}