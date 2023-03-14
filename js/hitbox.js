//TODO: check, seems that the player head can go through the tail;
function isPlayerHittingItself(nextDesiredPos, snake = [])
{
    let isHitting = false;

    for(let pos = 1; pos < snake.length-1 && !isHitting; pos++)
    {
        if(nextDesiredPos.x == snake[pos].position.x && nextDesiredPos.y == snake[pos].position.y)
        {
            isHitting = true;
        }
    }

    return isHitting;
}

function isPlayerHittingPoint(nextDesiredPos, pointPos)
{
    return nextDesiredPos.x == pointPos.x && nextDesiredPos.y == pointPos.y;
}

//TODO: if later on add the possibility of breaking the map, change to an dictionary of possible moves;
function isPlayerOutsideTheMapBounds(nextDesiredPos, mapBorders)
{
    return nextDesiredPos.x < mapBorders.start.x || nextDesiredPos.y < mapBorders.start.y ||
    nextDesiredPos.x > mapBorders.end.x-1 || nextDesiredPos.y > mapBorders.end.y-1;
}