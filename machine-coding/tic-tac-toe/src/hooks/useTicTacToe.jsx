import { useState } from "react";

const initialBoard = (size) => {
  let board = [];

  for (let index = 0; index < size; index++) {
    board.push(Array(size).fill(null));
  }

  return board;
};

const useTicTacToe = (boardSize) => {
  const [board, setBoard] = useState(initialBoard(boardSize));
  const [isXNext, setIsXNext] = useState(true);

  function calculateWinner(currentBoard) {
    // Check rows

    for (let rowIndex = 0; rowIndex < currentBoard.length; rowIndex++) {
      let player = "";
      let set = new Set();
      for (let colIndex = 0; colIndex < currentBoard[0].length; colIndex++) {
        player = currentBoard[rowIndex][colIndex];
        set.add(player);
      }
      if (set.size === 1 && player) return player;
    }
    // Check columns

    for (let colIndex = 0; colIndex < currentBoard.length; colIndex++) {
      let player = "";
      let set = new Set();
      for (let rowIndex = 0; rowIndex < currentBoard[0].length; rowIndex++) {
        player = currentBoard[rowIndex][colIndex];
        set.add(player);
      }
      if (set.size === 1 && player) return player;
    }
    //Check left and right diagonal

    let rowIndex = 0,
      colIndex = 0;

    let player = "";
    let set = new Set();
    while (
      rowIndex < currentBoard.length &&
      colIndex < currentBoard[0].length
    ) {
      player = currentBoard[rowIndex][colIndex];
      set.add(player);
      rowIndex++;
      colIndex++;
    }

    if (set.size === 1 && player) return player;

    rowIndex = 0;
    colIndex = currentBoard[0].length - 1;

    player = "";
    set.clear();
    while (rowIndex < currentBoard.length && colIndex >= 0) {
      player = currentBoard[rowIndex][colIndex];
      set.add(player);
      rowIndex++;
      colIndex--;
    }

    if (set.size === 1 && player) return player;

    // No winner
    return null;
  }

  function handleClick(rowIndex, colIndex) {
    const winner = calculateWinner(board);

    if (winner || board[rowIndex][colIndex]) return;

    let newBoard = board.map((row, rI) => {
      return row.map((cell, cI) => {
        if (rowIndex === rI && colIndex === cI) {
          return isXNext ? "X" : "O";
        }

        return cell;
      });
    });
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function reset() {
    setIsXNext(true);
    setBoard(initialBoard(boardSize));
  }

  function getStatus() {
    const winner = calculateWinner(board);

    if (winner) return `Player ${winner} wins!!`;
    else if (!board.flat().includes(null)) return "Draw";
    return `Player ${isXNext ? "X" : "O"} turn`;
  }

  return {
    board,
    getStatus,
    handleClick,
    reset,
  };
};

export default useTicTacToe;
