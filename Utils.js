var Utils = {
    /** Loops through hexadecimal values starting from 0x8000 to 0x0000
     * @param  {number}   hex       Takes a hexadecimal value
     * @param  {callback} callback  Takes a callback function that can receive two params(x, y)
     */
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
    }
}

export { Utils };
