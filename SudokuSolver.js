var board = [
  [7, 0, 2, 0, 5, 0, 6, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0],
  [1, 0, 0, 0, 0, 9, 5, 0, 0],
  [8, 0, 0, 0, 0, 0, 0, 9, 0],
  [0, 4, 3, 0, 0, 0, 7, 5, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 8],
  [0, 0, 9, 7, 0, 0, 0, 0, 5],
  [0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 7, 0, 4, 0, 2, 0, 3],
];

const GRID_SIZE = 9;

function isNumInRow(num, row) {
  for (let i = 0; i < GRID_SIZE; i++) {
    if (board[row][i] == num) {
      return true;
    }
  }
  return false;
}

function isNumInColumn(num, column) {
  for (let i = 0; i < GRID_SIZE; i++) {
    if (board[i][column] == num) {
      return true;
    }
  }
  return false;
}

function isNumInSquare(num, row, column) {
  row = Math.floor(row / 3) * 3;
  column = Math.floor(column / 3) * 3;

  for (let i = row; i < row + 3; i++) {
    for (let j = column; j < column + 3; j++) {
      if (board[i][j] == num) {
        return true;
      }
    }
  }
  return false;
}

function isNumValid(num, row, column) {
  if (
    isNumInColumn(num, column) ||
    isNumInRow(num, row) ||
    isNumInSquare(num, row, column)
  ) {
    return false;
  }
  return true;
}

function solveBoard() {
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let column = 0; column < GRID_SIZE; column++) {
      if (board[row][column] == 0) {
        for (let i = 1; i <= 9; i++) {
          if (isNumValid(i, row, column)) {
            board[row][column] = i;

            if (solveBoard()) {
              return true;
            } else {
              board[row][column] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
