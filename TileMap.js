import { Utils } from '/Utils.js';

// Takes a 1d Array in 0 and 1
// format it into 4x4 chunks
// convert chunks into hexadecimal values


var TileMap = {
    /** Calculates the horizontal and vertical chunks
     * @param  {number} units takes x or y units and converts them into 4x4 chunks
     */
    calculateChunks: function(units){
        var chunks;
        // Check if it's possible to divide by 4
        if(units%4){
            // Take the decimal points only and convert it to a whole number
            // so that you can get how far he is from being dividable by 4
            var tempVal = (((units/4) - Math.floor(units/4))*100/25);
            // Get the amount of chunks needed for the smallest dividable
            // number and add one extra chunks for the extra units
            chunks = ((units - tempVal)/4)+1
        } else {
            // If it is possible just divide units by 4
            // and you get the amount of chunks
            chunks = units/4
        }
        return chunks;
    },
    /** Creates a hex map, rows are the vertical chunks and cols are the horizontal chunks 
     * @param  {binary array} mapArr     Takes a 1d binary array
     * @param  {number}       xUnits     Takes an integer to convert it into horizontal chunks
     * @param  {number}       yUnits     Takes an integer to convert it into vertical chunks 
     */
    createMap: function(mapArr, xUnits, yUnits){
        var xChunks = TileMap.calculateChunks(xUnits);
        var yChunks = TileMap.calculateChunks(yUnits); 
        // console.log(xChunks + ' : ' +  yChunks);
        // Separate the arr into chunks using xChunks/yChunks
        var hexMap = [...Array(yChunks)].map(e => Array(xChunks));
        for(var k=0; k<yChunks; k++){
            for(var i=0; i<xChunks; i++){
                var tempArr = [];
                // k*4 means yChunks times 4 units simply because
                // we're working with a 4x4 chunk
                // and rows can go from 0 to how long the map is
                var row = k*4;
                // Each time you reach the relative 4th unit in the chunk horizontally
                // jump to the next row and restart counting from 1 horizontally
                // ones you reach the relative 4th row leave the loop and jump to the
                // next horizontal chunk
                for(var j=(i*4)+(row*xChunks*4); j<mapArr.length; j++){
                    tempArr.push(mapArr[j]);
                    if(j==((row)*(xChunks*4))+((i*4)+3)){
                        console.log(j + ' : Reached border');
                        row++;
                        j = ((row*xChunks*4+(i*4))-1); 
                    } 
                    if (row==((k+1)*4)){
                        break;
                    }
                }
                hexMap[k][i] = parseInt(tempArr.toString().split(',').join(''), 2).toString(16);
            }
        }
        console.log(hexMap);
    }
}
/* Use this for testing purposes
var bigArr =[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0
,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0
,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0
,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0
,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1
,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1
,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1
,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1
,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1
,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1
,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

TileMap.createMap(bigArr, 16, 12);
*/

export { TileMap };
