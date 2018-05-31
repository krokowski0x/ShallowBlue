import React, { Component } from 'react';
import Draggable from 'react-draggable';

import Square from './Square';
import { calcX, calcY, calcSquare, possibleMoves } from '../utils/positioning';
import { calcBestMove, positionCount } from '../utils/minimax';

class Chessboard extends Component {
  constructor(props) {
    super(props);

    this.makeMove = () => {
      if (this.props.difficulty === 1) {
        const availableMoves = this.state.chess.moves();
        this.state.chess.move(availableMoves[Math.floor(Math.random() * availableMoves.length)]);
      }
      if ([2, 3, 4].includes(this.props.difficulty)) {
        const start = performance.now();
        this.state.chess.move(calcBestMove(this.state.chess, this.props.difficulty));
        const end = performance.now();
        const time = end - start;
      }

      this.setState(this.state.chess);
      this.props.onMove(this.state.chess);
    };

    this.handleStart = (e) => {
      const square = calcSquare(e.clientX, e.clientY);
      const moves = this.state.chess.moves({ square });

      possibleMoves(moves, 'add');
      this.setState({ moves });
    };

    this.handleStop = (e) => {
      const square = calcSquare(e.x, e.y);
      possibleMoves(this.state.moves, 'remove');

      let move = null;
      this.state.moves.forEach((possibleMove) => {
        if (possibleMove.includes(square))
          move = possibleMove;
      });

      if (move) {
        this.state.chess.move(move);
        this.setState(this.state.chess);
        this.props.onMove(this.state.chess);
        setTimeout(this.makeMove, 0);
      }
    };

    this.state = {
      chess: this.props.chess,
    };
  }

  render() {
    const boardAscii = this.state.chess.ascii()
      .replace(/[\d+\-|\s]/gi, '')
      .replace(/\./g, 'a')
      .replace(/abcdefgh/, '')
      .split('');

    /* eslint react/no-array-index-key: "off" */
    /* eslint no-param-reassign: "off" */
    return (
      <div className="chessboard">
        <svg width="640" height="640" viewBox="0 0 100 100">
          {boardAscii.map((square, index) => <Square key={index} index={index} />)}
        </svg>
        {boardAscii.map((piece, index) => {
          if (piece.toLowerCase() === piece)
            piece += 'b';
          else
            piece += 'w';

          return (
            <Draggable
              key={piece + index}
              // bounds="parent"
              disabled={piece === 'ab'}
              onStart={this.handleStart}
              onStop={this.handleStop}
              grid={[80, 80]}
            >
              <img
                id={piece === 'ab' ? index : piece}
                alt="Chess Piece"
                draggable="false"
                src={`src/pieces/${piece}.svg`}
                height="80px"
                width="80px"
              />
            </Draggable>);
        })}
      </div>
    );
  }
}

export default Chessboard;
