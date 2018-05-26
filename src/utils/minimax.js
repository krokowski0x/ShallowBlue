import { evaluateBoard } from './boardEvaluation';

export let positionCount = 0;

const minimaxRoot = function(depth, game, isMaximisingPlayer) {

    let newGameMoves = game.moves();
    let bestMove = -9999;
    let bestMoveFound;

    for (let i = 0; i < newGameMoves.length; i++) {
      let newGameMove = newGameMoves[i]
      game.move(newGameMove);
      let value = minimax(depth - 1, game, -10000, 10000, !isMaximisingPlayer);
      game.undo();
      if (value >= bestMove) {
          bestMove = value;
          bestMoveFound = newGameMove;
      }
    }
    return bestMoveFound;
};

const minimax = function (depth, game, alpha, beta, isMaximisingPlayer) {
    positionCount++;
    if (depth === 0)
      return -evaluateBoard(game.board());

    let newGameMoves = game.moves();

    if (isMaximisingPlayer) {
      let bestMove = -9999;
      for (let i = 0; i < newGameMoves.length; i++) {
        game.move(newGameMoves[i]);
        bestMove = Math.max(bestMove, minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer));
        game.undo();
        alpha = Math.max(alpha, bestMove);
        if (beta <= alpha)
          return bestMove;
        }
      return bestMove;
    } else {
      let bestMove = 9999;
      for (let i = 0; i < newGameMoves.length; i++) {
        game.move(newGameMoves[i]);
        bestMove = Math.min(bestMove, minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer));
        game.undo();
        beta = Math.min(beta, bestMove);
        if (beta <= alpha)
          return bestMove;
        }
      return bestMove;
    }
};

export const calcBestMove = game => minimaxRoot(3, game, true);
