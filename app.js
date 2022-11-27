let guessColourDisplayer = document.querySelector('.colour-code');
let squareContainer = document.querySelector('.squares');

let guessColour = `rgb(${Math.floor(Math.random() * 257) * 1}, ${Math.floor(Math.random() * 257) * 1}, ${Math.floor(Math.random() * 257) * 1})`;
let randColour;
let squareCount = 6;
let randomSquare;
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
            square.style.backgroundColor = guessColour;
            square.classList.remove('fadeOut');
            square.classList.add('fadeIn');
        });

        
    } else{
        squareInfo.classList.add('fadeOut');
    }
}

createGrids();



