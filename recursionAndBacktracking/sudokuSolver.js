//* Write a program to solve a Sudoku puzzle by filling the empty cells.

const sudokuSolver = (board) => {
  solve(board);

  return board;
};

function solve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === ".") {
        for (let c = "1"; c <= "9"; c++) {
          if (isValid(board, i, j, c)) {
            board[i][j] = c;

            if (solve(board) === true) return true;
            else board[i][j] = ".";
          }
        }

        return false;
      }
    }
  }

  return true;
}

function isValid(board, row, col, c) {
  for (i = 0; i < 9; i++) {
    if (board[i][col] === c) return false;
    else if (board[row][i] === c) return false;
    else if (
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
        3 * Math.floor(col / 3) + (i % 3)
      ] === c
    )
      return false;
  }

  return true;
}

console.log(
  sudokuSolver([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
