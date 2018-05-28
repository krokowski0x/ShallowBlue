export const calcX = index => (index % 8) * 12.5;

export const calcY = index => Math.floor(index / 8) * 12.5;

export const calcSquare = (x, y) => `${String.fromCharCode(Math.floor((x - 160) / 80) + 95)}${10 - Math.floor(y / 80)}`;

export const possibleMoves = (moves, action) => moves.forEach((possibleMove) => {
  let move = possibleMove.replace(/[A-Z+#=x]/g, '');

  if (move.length === 3) move = move.slice(1);

  const moveElem = document.getElementById(move);

  if (action === 'add') moveElem.classList.add('available');
  if (action === 'remove') moveElem.classList.remove('available');
});
