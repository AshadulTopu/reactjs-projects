/* eslint-disable react/prop-types */
// 012
// 345
// 678

import { useEffect, useState } from "react";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  //   const [xIsNext, setXIsNext] = useState(true);
  const [isXTrun, setIsXTrun] = useState(true);
  const [status, setStatus] = useState("");

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (calculateWinner(boardCopy) || boardCopy[i]) return;
    boardCopy[i] = isXTrun ? "X" : "O";
    setBoard(boardCopy);
    setIsXTrun(!isXTrun);
  };

  const calculateWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  useEffect(() => {
    if (!calculateWinner(board) && board.every((square) => square !== null)) {
      setStatus("Match Draw, Please try again");
    } else if (calculateWinner(board)) {
      setStatus("Winner: " + calculateWinner(board) + ", Please start again");
    } else {
      setStatus("Next player: " + (isXTrun ? "X" : "O"));
    }
  }, [board, isXTrun]);

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXTrun(true);
    setStatus("");
  };

  return (
    <div className="container">
      <h2>Game Board</h2>
      <div className="game-container">
        <div className="game-row">
          <Square value={board[0]} onClick={() => handleClick(0)} />
          <Square value={board[1]} onClick={() => handleClick(1)} />
          <Square value={board[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="game-row">
          <Square value={board[3]} onClick={() => handleClick(3)} />
          <Square value={board[4]} onClick={() => handleClick(4)} />
          <Square value={board[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="game-row">
          <Square value={board[6]} onClick={() => handleClick(6)} />
          <Square value={board[7]} onClick={() => handleClick(7)} />
          <Square value={board[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="status">
        <h3>{status}</h3>
      </div>
      <button onClick={handleRestart}> Reset </button>
    </div>
  );
};

export default TicTacToe;
