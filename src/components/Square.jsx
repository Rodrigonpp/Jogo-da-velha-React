function Square({ value, onClick, index }) {
  return (
    <button
      className={`square ${value ? `square-${value.toLowerCase()}` : ""}`}
      type="button"
      onClick={onClick}
      aria-label={`Casa ${index + 1}${value ? `, ${value}` : ", vazia"}`}
      disabled={Boolean(value)}
    >
      {value}
    </button>
  );
}

export default Square;