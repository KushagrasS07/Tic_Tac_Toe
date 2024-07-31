const gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let currentRound=1;
let editedPlayer=0;
let activePlayer=0;
let isGameOver=false;

const players=[
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    }
];

const editPlayer1BtnElement=document.getElementById("p1-edit-btn");
const editPlayer2BtnElement=document.getElementById("p2-edit-btn");
const formElement=document.querySelector('form');
const errorsOutputElement=document.getElementById("config-errors");
const gameOverElement=document.getElementById('game-over');


const playerConfigOverlayElement=document.getElementById('config-overlay');
const backdropElement=document.getElementById('background-while-overlay');
const cancelConfigBtnElement=document.getElementById("cancel-btn-config");
const playerTurnMsgElement=document.getElementById('player-turn-msg');

const startGameElement=document.getElementById('start-game');
const gameAreaElement=document.getElementById('active-game');
const activePlayerNameElement=document.getElementById('active-player-name');

//const gameFieldElements=document.querySelectorAll('#game-board li');
const gameBoardElment=document.getElementById('game-board');
editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);
formElement.addEventListener('submit',savePlayerConfig);//Since we have selected the form instead of just a button,that's why we have used 'submit'as the eventListener instead of 'click' 

startGameElement.addEventListener('click',startNewGame);
/*for(const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click',selectGameField);
}*/

//alternative of above method is:

gameBoardElment.addEventListener('click',selectGameField);

