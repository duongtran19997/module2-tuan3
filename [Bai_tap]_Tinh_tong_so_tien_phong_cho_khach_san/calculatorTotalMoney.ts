
let matrix =    [[0, 1, 1, 0],
                [0, 5, 0, 5],
                [2, 0, 3, 3]]

// function checkMoney(matrix) {
//     let sum: number = 0;
//     // Duyệt theo chiều dọc, gặp số 0 là break luôn
//     for (let i = 0; i < matrix[0].length; i++) {
//         for (let j = 0; j < matrix.length; j++) {
//             if (matrix[j-1][i] === 0&&j>0) {
//                 continue;
//             }
//             sum += matrix[j][i];
//         }
//     }
//     return sum;
//         }
const matrixElementsSum = matrix => {
    let sum: number = 0;
    // Duyệt theo chiều dọc, gặp số 0 là break luôn
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (j>0&&matrix[j-1][i] ===0) {
             continue;
            }
            sum += matrix[j][i];
        }
    }
    return sum;
}


console.log(matrixElementsSum(matrix));