import evaluateBoard from './boardEvaluation';
/* eslint import/no-mutable-exports: "off" */
export let positionCount = 0;

const minimaxRoot = (depth, game, isMaximisingPlayer) => {
  const newGameMoves = game.moves();
  let bestMove = -9999;
  let bestMoveFound;

  newGameMoves.forEach((newGameMove) => {
    game.move(newGameMove);
    const value = minimax(depth - 1, game, -10000, 10000, !isMaximisingPlayer);
    game.undo();
    if (value >= bestMove) {
      bestMove = value;
      bestMoveFound = newGameMove;
    }
  });
  return bestMoveFound;
};

const minimax = (depth, game, alpha, beta, isMaximisingPlayer) => {
  positionCount++;
  if (depth === 0)
    return -evaluateBoard(game.board());

  const newGameMoves = game.moves();
  let bestMove = -9999;

  if (isMaximisingPlayer)
    newGameMoves.forEach((newGameMove) => {
      game.move(newGameMove);
      bestMove = Math.max(bestMove, minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer));
      game.undo();
      alpha = Math.max(alpha, bestMove);
      if (beta <= alpha)
        return bestMove;
    });
  else
    newGameMoves.forEach((newGameMove) => {
      game.move(newGameMove);
      bestMove = Math.min(bestMove, minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer));
      game.undo();
      beta = Math.min(beta, bestMove);
      if (beta <= alpha)
        return bestMove;
    });
  return bestMove;
};

export const calcBestMove = (game, depth) => {
  positionCount = 0;
  return minimaxRoot(depth, game, true);
};
