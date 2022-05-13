var matrix = [[0, 1, 1, 0], [0, 5, 0, 5], [2, 0, 3, 3]];
function checkMoney(array) {
    var total = 0;
    for (var j = 0; j < array.length; j++) {
        for (var k = 0; k <= array.length; k++) {
            if (array[j][k] === 0) {
                for (var l = j; l < array.length; l++) {
                    array[l][k] = 0;
                }
                // a.push([j,k])
            }
            total += array[j][k];
        }
    }
}
checkMoney(matrix);
