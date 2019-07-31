
const instructions = document.getElementById('instructions-box');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', hideInstructions);

    

function hideInstructions() {
    instructions.classList.add('hidden');
}