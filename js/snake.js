class SnakePiece
{
    constructor(x, y)
    {
        this.position = new Vector2(x, y);
    }

    position;

    updatePosition(position = new Vector2(0,0))
    {
        this.position = position;
    }
}