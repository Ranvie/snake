let gameBoard = document.getElementById('game_board');
let gameBoardArray = [];

function createBoard(cellPerRow = 0, RowQty = 0)
{
    var parentRow;
    let matrixCell;

    for(let row = 0; row < RowQty; row++)
    {
        parentRow = newTableRow();
        gameBoardArray.push([]);

        for(let cell = 0; cell < cellPerRow; cell++)
        {
            matrixCell = createAndAppendCellsToRow(row, cell, parentRow);
            gameBoardArray[row].push(matrixCell);
        }
    }
}

function newTableRow()
{
    let tableRow = document.createElement('tr');

    gameBoard.appendChild(tableRow);

    return tableRow;
}

function createAndAppendCellsToRow(rowCount = 0, cellCount = 0, appendParent)
{
    let tableCell = document.createElement('td');

    tableCell.id = rowCount.toString() + "x" + cellCount.toString();
    appendParent.appendChild(tableCell);

    return tableCell;
}