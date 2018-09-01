import { Utils } from '/Utils.js';


var TileMap = {
    // Takes a 2dArray in 0 and 1
    // convert 0 and 1's into hexadecimal values
    // format it into 4x4 chunks
    calculateChunks: function(units){
        var chunks;
        if(units%4){
            var tempVal = (((units/4) - Math.floor(units/4))*100/25);
            chunks = ((units - tempVal)/4)+1
        } else {
            chunks = units/4
        }
        return chunks;
    },
    createMap: function(mapArr, xUnits, yUnits){
        // First check how many xChunks and yChunks
        var xChunks = TileMap.calculateChunks(xUnits);
        var yChunks = TileMap.calculateChunks(yUnits); 
        console.log(xChunks + ' : ' +  yChunks);
        // Separate the arr into chunks using xChunks/yChunks
        var map = [];
        // TODO Make the yChunks work now
        for(var k=0; k<yChunks; k++){
            for(var i=0; i<xChunks; i++){
                var tempArr = [];
                var row = 0;
                for(var j=(i*4); j<mapArr.length; j++){
                    tempArr.push(mapArr[j]);
                    console.log(j);
                    // Trying to make it match every 4th unit of the 4x4 jump a row
                    if(j==((row)*(xChunks*4))+((i*4)+3)){
                        console.log(j + ' : Reached border');
                        row++;
                        console.log(row + ' * ' + xChunks + ' * 4');
                        j = ((row*xChunks*4+(i*4))-1); 
                    } 
                    if (row==4){
                        break;
                    }
                }
                map.push(tempArr);
            }
        }
        console.log(map);
    }
}

/* var test = [1, 1, 1, 1, 1, 1, 1, 1, 
            1, 0, 0, 0, 0, 0 ,0 ,0, 
            1, 0, 0, 0, 0, 0 ,0 ,0, 
            1, 0, 0, 0, 0, 0 ,0 ,0];
*/
var bigArr = [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1];
TileMap.createMap(bigArr, 12, 8);

export { TileMap };
