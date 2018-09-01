var Utils = {
    HexLoop: function(hex, callback) {
        var x = 0, y = 0, bit;
        for (bit = 0x8000; bit > 0; bit = bit >> 1, x++) {
            if (x === 4) {
                y++;
                x = 0;
            }
            if (bit & hex) {
                callback(x, y);
            }
        }
    },

    myFunction: function(){
        console.log('Modules Workerino!');
    }
}

export { Utils };
