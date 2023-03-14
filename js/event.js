function win()
{
    toggleGame(false);
    changeIngameMessage("Congratulations, you won! Press 'Space' to restart");
    toggleIngameMessage(true);
}

function gameOver()
{
    toggleGame(false);
    changeIngameMessage("GameOver. Press 'Space' to restart");
    toggleIngameMessage(true);
}

let gameStarted = false;
let updater;
function toggleGame(isRunning)
{
    if(isRunning)
    {
        resetScore();
        resetPlayer();
        randomizePointPos(rows, cellsPerRow);
        updater = window.setInterval(move, speed);
        toggleIngameMessage(false);
        gameStarted = true;
    }
    else
    {
        clearInterval(updater);
        gameStarted = false;
    }
}

function toggleIngameMessage(isEnabled)
{
    let display = isEnabled ? 'flex' : 'none';

    ingame_messages.style.setProperty('display', display);
}

function changeIngameMessage(showMessage)
{
    message.innerHTML = showMessage;
}

function resetScore()
{
    score = 0;
    scoreHolder.innerHTML = "0";
}

function resetPlayer()
{
    snake = [];
    snake.push(new SnakePiece(Math.floor(rows/2), Math.floor(cellsPerRow/2)));
}

function getPoint(rows = 0, cellsPerRow = 0)
{
    addScore();
    addSnakePiece();
    randomizePointPos(rows, cellsPerRow);
}

function addScore()
{
    score++;
    scoreHolder.innerHTML = score;
}

function addSnakePiece()
{
    snake.push(new SnakePiece(pointPos.x, pointPos.y));
}

function randomizePointPos(rows = 0, cellsPerRow = 0)
{
    let newPos;

    do{
        newPos = new Vector2(
            randomInteger(0, rows),
            randomInteger(0, cellsPerRow)
        );
    }while(!isPointPositionValid(newPos));

    pointPos = newPos;
}

//TODO: change for a dictionary if possible;
function isPointPositionValid(newPos)
{
    let isValid = true;

    for(let pos=0; pos < snake.length && isValid; pos++)
    {
        if(snake[pos].position.x == newPos.x && snake[pos].position.y == newPos.y)
        {
            isValid = false;
        }
    }

    return isValid;
}