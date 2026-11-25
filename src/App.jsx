import { useState } from "react";
import Board from "./components/Board.jsx";
import { calculateWinner } from "./utils/game.js";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);
  const gameFinished = Boolean(winner) || isDraw;

  function handleSquareClick(index) {
    // Impede alterar uma casa ocupada ou continuar após o fim da partida.
    if (squares[index] || gameFinished) return;

    // Cria uma nova matriz; não altera diretamente o estado anterior.
    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleNewGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  let status;
  if (winner) {
    status = `Vencedor: ${winner}`;
  } else if (isDraw) {
    status = "Empate! Ninguém venceu.";
  } else {
    status = `Próximo jogador: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <main className="page">
      <section className="game-card">
        <header className="header">
          <span className="eyebrow">REACT • ESTADO • COMPONENTES</span>
          <h1>Jogo da Velha</h1>
          <p>Desafie alguém para uma partida de estratégia.</p>
        </header>

        <div className={`status ${gameFinished ? "status-finished" : ""}`} role="status" aria-live="polite">
          {status}
        </div>

        <Board squares={squares} onSquareClick={handleSquareClick} />

        <button className="reset-button" type="button" onClick={handleNewGame}>
          Novo Jogo
        </button>

        <footer className="footer">
          <span><strong>X</strong> começa a partida</span>
          <span>3 em linha vence</span>
        </footer>
      </section>
    </main>
  );
}

export default App;