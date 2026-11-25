import Square from "./Square.jsx";

function Board({ squares, onSquareClick }) {
  return (
    <div className="board" role="group" aria-label="Tabuleiro do jogo da velha">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          index={index}
        />
      ))}
    </div>
  );
}

export default Board;