export function initialBoard(size) {
  return Array(size * size).fill(null);
}

/**
  We will be using a winning matrix to check whether player X won or player O.
  The other way would have been to iterate the array again and again to check whenever any new move is made and check which player won.
  
  Taking 3 * 3 tic tac toe as an example, the winning matrix will be 
  [
    Row
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    Column
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    Left to Right Diagonal
    [0, 4, 8],

    Right to Left Diagonal
    [2, 4, 6],
  ];

  The winning matrix is created by checking all possible conditions for a player to win like
  when all cells in first row which have indexes as 0, 1 and 2 are filled with either X or O then respective player wins
  OR when all cells in first column which have indexes as 0, 3 and 6 are filled with either X or O then respective player wins
  OR when all cells in left to right diagonal which have indexes as 0, 4 and 8 are filled with either X or O then respective player wins

  The logic below is generalized from the above matrix
  
*/

export function generateWinningPatterns(boardSize) {
  const winningPatterns = [];

  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    const horizontalWinningPattern = [];
    const verticalWinningPattern = [];

    for (let colIndex = 0; colIndex < boardSize; colIndex++) {
      horizontalWinningPattern.push(boardSize * rowIndex + colIndex);
      verticalWinningPattern.push(boardSize * colIndex + rowIndex);
    }

    winningPatterns.push(horizontalWinningPattern, verticalWinningPattern);
  }

  const leftToRightDiagonal = [];
  const rightToLeftDiagonal = [];

  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    leftToRightDiagonal.push(rowIndex * (boardSize + 1));
    rightToLeftDiagonal.push((rowIndex + 1) * (boardSize - 1));
  }

  winningPatterns.push(leftToRightDiagonal);
  winningPatterns.push(rightToLeftDiagonal);

  return winningPatterns;
}

export function calculateWinner(currentBoard, winningPatterns) {
  const boardSize = Math.sqrt(currentBoard.length);

  for (let i = 0; i < winningPatterns.length; i++) {
    const pattern = winningPatterns[i];
    let countX = 0;
    let countO = 0;

    for (let j = 0; j < pattern.length; j++) {
      const cell = currentBoard[pattern[j]];
      if (cell === "X") {
        countX++;
      } else if (cell === "O") {
        countO++;
      }
    }

    if (countX === boardSize) return "X";
    if (countO === boardSize) return "O";
  }

  return null;
}
