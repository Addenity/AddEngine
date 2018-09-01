/*jshint esversion: 6 */

function Rendering() {

    this.RenderRectangle = function (x, y, width, height, rectangleStyle, borderStyle) {
        Graphics.DrawRectangle(x, y, width, height,rectangleStyle);
        if (borderStyle) {
            Graphics.strokeStyle = strokeColor;
            Graphics.strokeRect(x, y, width, height);
        }
    };
    // draw one unit
    this.DrawUnit = function (x, y, color) {
        var size = 3;
        RenderRectangle(x, y, UNIT, UNIT, color); // Draw main color
        RenderRectangle(x + UNIT - size, y, size, UNIT, 'black'); // Draw right black border
        RenderRectangle(x, y + UNIT - size, UNIT, size, 'black'); // Draw left black border
        RenderRectangle(x, y, size, size, 'white'); // Draw top right white dot
        RenderRectangle(x + size, y + size, size, size * 2, 'white'); // Draw top right top border
        RenderRectangle(x + size, y + size, size * 2, size, 'white'); // Draw top right left border 
    };


    // One function that calculates position, rotation direction of any piece
    this.DrawHexSprite = function (Hex, direction, x, y) {
        HexLoop(Hex, (posx, posy) => drawUnit(x + posx * UNIT, y + posy * UNIT, block.color));
    };

}
