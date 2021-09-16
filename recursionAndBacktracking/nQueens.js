//* The n-queens puzzle is the problem of placing n queens on a (n×n) chessboard such that no two queens can attack each other.

const nQueens = (n) => {
  const result = [];
  const s = Array.from({ length: n }, () => ".");
  const board = Array.from({ length: n }, () => s);

  solve(0, board, result, n);

  return result;
};

function solve(col, board, result, n) {
  if (col === n) {
    console.log("break point");
    result.push([board]);
    return;
  }

  for (let row = 0; row < n; row++) {
    if (isSafe(row, col, board, n)) {
      board[row][col] = "Q";
      solve(col + 1, board, result, n);
      board[row][col] = ".";
    }
  }
}

function isSafe(row, col, board, n) {
  const dupRow = row;
  const dupCol = col;

  while (row >= 0 && col >= 0) {
    if (board[row][col] === "Q") return false;
    row--;
    col--;
  }

  row = dupRow;
  col = dupCol;
  while (col >= 0) {
    if (board[row][col] === "Q") return false;
    col--;
  }

  row = dupRow;
  col = dupCol;
  while (row < n && col >= 0) {
    if (board[row][col] === "Q") return false;
    row++;
    col--;
  }

  return true;
}

console.log(nQueens(4));
