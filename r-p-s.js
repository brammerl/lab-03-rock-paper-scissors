import getRandomThrow from './getRandomThrow.js';

const myButton = document.getElementById('fight');
const winSpan = document.getElementById('wins');
const winLoseSpan = document.getElementById('winLose');
const lossSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');

let winTally = 0;
let lossTally = 0;
let drawTally = 0;

const updateMatchStats = () => {
    winSpan.textContent = winTally;
    lossSpan.textContent = lossTally;
    drawSpan.textContent = drawTally;
};









