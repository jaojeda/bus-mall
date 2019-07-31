import store from './data/store.js';
import ProductList from './product-set.js';

const instructions = document.getElementById('instructions-box');
const startButton = document.getElementById('start-button');
const quizSection = document.getElementById('quiz-section');

startButton.addEventListener('click', startTest);

const products = store.getProducts();
const masterProductsList = new ProductList(products);
let reloadList = [];

const productOne = masterProductsList.getRandomProduct();
const displayList = new ProductList(products);
displayList.removeById(productOne.id);
const productTwo = displayList.getRandomProduct();
displayList.removeById(productTwo.id);
const productThree = displayList.getRandomProduct();
displayList.removeById(productThree.id);
reloadList.push(displayList.list);

console.log(productOne);


function startTest() {
    instructions.classList.add('hidden');
    quizSection.classList.remove('hidden');
}