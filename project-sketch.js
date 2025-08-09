const container = document.querySelector('.container');
const setGridBtn = document.getELementById('.set-grid-btn');
const clearBtn = document.getElementById('.clear-btn');
const blackModeBtn = document.getElementById('mode-black');
const rainbowModeBtn = document.getElementById('mode-rainbow');

let currentMode = 'black';
let gridSize = 16;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    container.innerHTML = '';
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = '${squareSize}px';
        square.style.height = '${suqareSize}px';
        
        square.addEventListener('mouseenter', () => {
            if (currentMode === 'black'){
                square.style.backgroundColor = 'black';
            } else if (currentMode === 'rainbow') {
                square.style.backgroundColor = getRandomColor();
            }
        });
        container.appendChild(square);
    }
}

//button handlers

setGridBtn.addEventListener('click', () => {
    
})