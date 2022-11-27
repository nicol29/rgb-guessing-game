let guessColourDisplayer = document.querySelector('.colour-code');
let squareContainer = document.querySelector('.squares');
let difficultyChoices = document.querySelectorAll('.difficulty div');
let gameStatusPrompt = document.querySelector('.game-status');

let guessColour = `rgb(${Math.floor(Math.random() * 257) * 1}, ${Math.floor(Math.random() * 257) * 1}, ${Math.floor(Math.random() * 257) * 1})`;
let squareCount = 6;
let isHardDifficulty = true;
let didWin = false;

let randomSquare;
let randColour;
let squares;


let createGrids = () => {
    guessColourDisplayer.innerText = guessColour;
    randomSquare = Math.floor(Math.random() * squareCount) * 1;

    for(let i = 0; i < squareCount; i++){
        let square = document.createElement('div')

        if(i == randomSquare){
            square.style.backgroundColor = guessColour;
        } else{
            randColour = `rgb(${Math.floor(Math.random() * 257) * 1}, ${Math.floor(Math.random() * 257) * 1}, ${Math.floor(Math.random() * 257) * 1})`;
            square.style.backgroundColor = randColour;
        }

        squareContainer.appendChild(square);
    }
    squares = document.querySelectorAll('.squares div');
    squares.forEach(square => square.addEventListener('click', () => {
        gameLogic(square);
    }));
}

let gameLogic = (squareInfo) => {
    if(squareInfo.style.backgroundColor == guessColour){
        squares.forEach(square => {
            gameStatusPrompt.innerText = 'Play Again'


            square.style.backgroundColor = guessColour;
            square.classList.remove('fadeOut');
            square.classList.add('fadeIn');
        });
    } else{
        squareInfo.classList.add('fadeOut');
    }
}

let resetGame = () => {
    guessColour = `rgb(${Math.floor(Math.random() * 257) * 1}, ${Math.floor(Math.random() * 257) * 1}, ${Math.floor(Math.random() * 257) * 1})`;
    squares.forEach(square => square.remove());
    createGrids();
}

difficultyChoices.forEach(difficulty => difficulty.addEventListener('click', () => {
    if(difficulty.innerText == 'EASY'){
        squareCount = 3;
        resetGame();
    } else{
        squareCount = 6;
        resetGame();
    }
}));



createGrids();

// resetGame();

