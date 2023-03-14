//TODO: possible improvement: update only what is necessary;
function updateGameBoard(snakeArray = [], pointPos = {x: 0, y: 0})
{
    snakeArray.forEach((snakePiece) => {
        gameBoardArray[snakePiece.position.y][snakePiece.position.x].classList.add('snake_body')
    });

    if(pointPos.x >= 0 && pointPos.y >= 0)
    {
        gameBoardArray[pointPos.y][pointPos.x].classList.add('point');
    }
}

function clearBoard()
{
    for(let y=0; y < gameBoardArray.length; y++)
    {
        for(let x=0; x < gameBoardArray[0].length; x++)
        {
            undrawPosition(x, y);
        }
    }
}

function undrawPosition(x, y)
{
    gameBoardArray[y][x].classList.remove('snake_body');
    gameBoardArray[y][x].classList.remove('point');
}