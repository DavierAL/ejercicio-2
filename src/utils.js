/*
 * sumRows:
 * Genera un arreglo en el que cada elemento i corresponde
 * a la suma de los elementos de la fila i de la matriz.
 */
export function sumRows(matrix) {
  const sumRows = [];

  for (let i = 0; i < matrix.length; i++) {
    let sumRow = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      sumRow += matrix[i][j];
    }

    sumRows.push(sumRow);
  }

  return sumRows;
}

/*
 * sumCols:
 * Genera un arreglo en el que cada elemento i corresponde
 * a la suma de los elementos de la columna i de la matriz.
 */
export function sumCols(matrix) {
  const sumCols = [];

  for (let i = 0; i < matrix.length; i++) {
    let sumCol = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      sumCol += matrix[j][i];
    }

    sumCols.push(sumCol);
  }
  
  return sumCols;
}
