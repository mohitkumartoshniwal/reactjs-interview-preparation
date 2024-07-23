import { useMemo, useState } from "react";
import {
  calculateWinner,
  generateWinningPatterns,
  initialBoard,
} from "../utils";

const TicTacToe = ({ boardSize = 3 }) => {
  const [board, setBoard] = useState(initialBoard(boardSize));
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(index) {
    const winner = calculateWinner(board, winningPatterns);

    if (winner ?? board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function getStatusMessage() {
    const winner = calculateWinner(board, winningPatterns);

    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a draw!!`;

    return `Player ${isXNext ? "X" : "O"} turn`;
  }

  function resetGame() {
    setBoard(initialBoard(boardSize));
    setIsXNext(true);
  }

  const winningPatterns = useMemo(() => {
    return generateWinningPatterns(boardSize);
  }, [boardSize]);

  return (
    <div
      className="game"
      style={{ "--board-size": boardSize, "--cell-size": "100px" }}
    >
      <div className="status">
        {getStatusMessage()}
        <button type="button" className="reset-game" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((cellValue, index) => {
          return (
            <button
              type="button"
              key={index}
              className="cell"
              disabled={cellValue !== null}
              onClick={() => handleClick(index)}
            >
              {cellValue}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
