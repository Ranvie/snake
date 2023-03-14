let snake = [];
const rows = 19;
const cellsPerRow = 19;
let pointPos = new Vector2(-1,-1);
const mapBorders = { start: new Vector2(0,0), end: new Vector2(rows,cellsPerRow) };

let scoreHolder = document.getElementById('score');
let score = 0;
let winScore = 100;

const ingame_messages = document.getElementById('ingame_messages');
const message = document.getElementById('message');

let speed = 140;

(function main() 
{
    resetPlayer();

    createBoard(rows, cellsPerRow);

    updateGameBoard(snake, pointPos);
})()