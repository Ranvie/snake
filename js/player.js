let isInputLocked = false;
let lastDir = Direction.Down;

document.addEventListener('keyup', () => {
    isInputLocked = false;
})

document.addEventListener('keydown', (event) => {
    if(!isInputLocked)
    {
        isInputLocked = true;
        input(event.key);
    }
})

//TODO: sometimes the player lose out of nowhere;
function input(keyPressed)
{
    let newDir;

    switch(keyPressed)
    {
        case "w":
            newDir = Direction.Up;
            break;
        
        case "s":
            newDir = Direction.Down;
            break;

        case "a":
            newDir = Direction.Left;
            break;

        case "d":
            newDir = Direction.Right;
            break;

        case " ":
            if(!gameStarted)
            {
                gameStarted = true;
                toggleGame(gameStarted);
            }
            newDir = lastDir;
            break;

        default:
            newDir = lastDir;
            break;
    }

    if(isInputAllowed(lastDir, newDir) || snake.length == 1) { lastDir = newDir; }
}

function isInputAllowed(lastDir, newDir)
{
    if(lastDir == Direction.Down && newDir != Direction.Up)    return true;
    if(lastDir == Direction.Up && newDir != Direction.Down)    return true;
    if(lastDir == Direction.Left && newDir != Direction.Right) return true;
    if(lastDir == Direction.Right && newDir != Direction.Left) return true;

    return false;
}

//TODO: make a main method that update the entire board, removing the responsability from player class;
function move()
{
    let nextPos = nextPosition(snake[0]);

    if(!isPlayerHittingItself(nextPos, snake) && !isPlayerOutsideTheMapBounds(nextPos, mapBorders))
    {

        if(isPlayerHittingPoint(nextPos, pointPos))
        {
            getPoint(rows, cellsPerRow);

            if(score == winScore && winScore != -1)
            {
                win();
            }
        }

        snake[snake.length-1].updatePosition(nextPos);
        reorderSnakeArray();

        clearBoard();
        updateGameBoard(snake, pointPos);
    }
    else
    {
        gameOver(rows, cellsPerRow);
        gameStarted = false;
    }
}

function nextPosition(sneakHead)
{
    let newPos;

    switch(lastDir)
    {
        case Direction.Up:
            newPos = new Vector2(sneakHead.position.x,sneakHead.position.y-1);
            break;

        case Direction.Down:
            newPos = new Vector2(sneakHead.position.x,sneakHead.position.y+1);
            break;

        case Direction.Left:
            newPos = new Vector2(sneakHead.position.x-1,sneakHead.position.y);
            break;

        case Direction.Right:
            newPos = new Vector2(sneakHead.position.x+1,sneakHead.position.y);
            break;
    }

    return newPos;
}

function reorderSnakeArray()
{
    let aux = [];

    //Transform the snake tail into the head, then, move all positions of the array to the right;
    aux.push(snake[snake.length-1]);
    snake.slice(0, snake.length-1).forEach((obj) => aux.push(obj));
    
    snake = aux;
}