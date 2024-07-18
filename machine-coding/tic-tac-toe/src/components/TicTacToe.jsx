import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = ({ boardSize = 3 }) => {
  const { board, getStatus, handleClick, reset } = useTicTacToe(boardSize);

  return (
    <div className="game" style={{ "--board-size": boardSize }}>
      <div className="status">
        <span>{getStatus()}</span>
        <button className="reset-game" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="board">
        {board.map((row, rowIndex) => {
          return row.map((cell, colIndex) => (
            <button
              className="cell"
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(rowIndex, colIndex)}
              disabled={cell !== null}
            >
              {cell}
            </button>
          ));
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
