
const instructions = document.getElementById('instructions-box');
const startButton = document.getElementById('start-button');
const quizSection = document.getElementById('quiz-section');

startButton.addEventListener('click', startTest);

const product =     

function startTest() {
    instructions.classList.add('hidden');
    quizSection.classList.remove('hidden');
};