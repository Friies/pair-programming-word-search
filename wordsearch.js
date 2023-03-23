//completed with @alinebellozo
const transposeArray = (matrix) => {
    let numRows = matrix.length;
    let numCols = matrix[0].length;
  
    // Create a new matrix with swapped dimesions
    let transposedMatrix = [];
  
    for (let j = 0; j < numCols; j++) {
      transposedMatrix[j] = new Array(numRows);
    }
  
    // Copy the values from original matrix to the transposed Matix
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        transposedMatrix[j][i] = matrix[i][j];
      }
    }
  
    return transposedMatrix;
  };
  
  const wordSearch = (letters, word) => {
    const horizontalVerticalJoin = letters.map((ls) => ls.join(""));
  
    const backwardJoin = horizontalVerticalJoin.map((string) =>
      string.split("").reverse().join("")
    );
  
    for (const l of horizontalVerticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    return false;
  };
  
  module.exports = { wordSearch, transposeArray };
  