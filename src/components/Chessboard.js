import React, { Component } from 'react';
import Draggable from 'react-draggable';

import Square from './Square';
import { calcSquare, possibleMoves } from '../utils/positioning';
import { calcBestMove, positionCount } from '../utils/minimax';

export default class Chessboard extends Component {
  constructor(props) {
    super(props);

    this.makeMove = () => {
      // If it's at random difficulty
      if (this.props.difficulty === 1) {
        const availableMoves = this.state.chess.moves();
        // Pick a random move from available
        this.state.chess.move(availableMoves[Math.floor(Math.random() * availableMoves.length)]);
      }
      // If it uses AI
      if ([2, 3, 4].includes(this.props.difficulty)) {
        // Check the performance
        const start = performance.now();
        // Calculate best move
        this.state.chess.move(calcBestMove(this.state.chess, this.props.difficulty));
        const end = performance.now();
        const time = Math.floor(end - start) / 1000;
        this.setState({ info: { time, positions: positionCount } });
      }

      this.setState(this.state.chess);
      this.props.onMove(this.state.chess, this.state.info);
    };

    this.handleStart = (e) => {
      const chessboardTop = document.getElementById('a8').getBoundingClientRect();
      const square = calcSquare(e.clientX - chessboardTop.x, e.clientY - chessboardTop.y);
      const moves = this.state.chess.moves({ square });

      possibleMoves(moves, 'add');
      this.setState({ moves });
    };

    this.handleStop = (e) => {
      const chessboardTop = document.getElementById('a8').getBoundingClientRect();
      const square = calcSquare(e.x - chessboardTop.x, e.y - chessboardTop.y);
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
      } else {
        this.state.chess.move(this.state.moves[0]);
        this.setState(this.state.chess);
      }
    };

    this.state = {
      chess: this.props.chess,
      info: { time: 0, positions: 0 },
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
        <svg viewBox="0 0 100 100">
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
              grid={[70, 70]}
            >
              <img
                id={piece === 'ab' ? index : piece}
                alt="Chess Piece"
                draggable="false"
                src={`src/pieces/${piece.toLowerCase()}.svg`}
              />
            </Draggable>);
        })}
      </div>
    );
  }
}
