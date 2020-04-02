import getRandomThrow from './getRandomThrow.js';
import checkResults from './checkResult.js';

const myButton = document.getElementById('fight');
const myButtonTwo = document.getElementById('reset');
const winSpan = document.getElementById('wins');
const winLose = document.getElementById('message');
const lossSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
const makeVisible = document.getElementById('roundResult');
const updatedImage = document.getElementById('compImage');
const resetText = document.getElementById('resetTotal');

let winTally = 0;
let lossTally = 0;
let drawTally = 0;
let resetCount = 0;

const updateMatchStats = () => {
    winSpan.textContent = winTally;
    lossSpan.textContent = lossTally;
    drawSpan.textContent = drawTally;
};

myButton.addEventListener('click', () => {
    const compChoice = getRandomThrow();
    const playerRadio = document.querySelector('input:checked');
    const playerChoice = playerRadio.value;

    const results = checkResults(playerChoice, compChoice);
    
    if (results === 'draw') {
        drawTally++;
        makeVisible.style.visibility = 'visible';
        updatedImage.src = 'https://chrysalis.com.au/images/Headlam-Stalemate-2709.jpg';
        winLose.textContent = `IT'S A DRAW! Your oponent chose: ${compChoice}`;
    } else if (results === 'win') {
        winTally++;
        makeVisible.style.visibility = 'visible';
        updatedImage.src = 'https://www.uxmetric.com/wp-content/uploads/2018/05/quickwin-uxmetric.png';
        winLose.textContent = `YOU WIN! Your oponent chose: ${compChoice}`;
        
    } else if (results === 'lose') {
        lossTally++;
        makeVisible.style.visibility = 'visible';
        updatedImage.src = 'https://image.shutterstock.com/image-vector/you-lose-red-rubber-stamp-260nw-244769227.jpg';
        winLose.textContent = `YOU LOSE! Your oponent chose: ${compChoice}`;
    }

    updateMatchStats();

});

myButtonTwo.addEventListener('click', () => {
    winTally = 0;
    lossTally = 0;
    drawTally = 0;

    updateMatchStats();
    makeVisible.style.visibility = 'hidden ';

    resetCount++;
    resetText.textContent = resetCount;
    

});

