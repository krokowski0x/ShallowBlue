import React, { Component } from 'react';
import Draggable from 'react-draggable';

import Square from './Square';

class Chessboard extends Component {
  constructor(props) {
    super(props);
    this.calcX = index => (index % 8) * 12.5;
    this.calcY = index => Math.floor(index / 8) * 12.5;
    this.calcSquare = (x, y) => `${String.fromCharCode(Math.floor(x / 80) + 96)}${9 - Math.floor(y / 80)}`;
    this.makeMove = () => {
      const possibleMoves = this.state.chess.moves();
      this.state.chess.move(possibleMoves[Math.floor(Math.random() * possibleMoves.length)]);
      this.setState(this.state.chess);
    };
    this.handleStart = (e) => {
      const square = this.calcSquare(e.clientX, e.clientY);
      this.setState({ from: square });
    };
    this.handleStop = (e) => {
      const square = this.calcSquare(e.x, e.y);
      if (this.state.chess.moves().includes(square)) {
        this.state.chess.move({ from: this.state.from, to: square });
        this.setState(this.state.chess);
      }
      this.makeMove();
    };

    this.state = {
      chess: props.chess,
    };
  }

  render() {
    let boardAscii = this.state.chess.ascii()
      .replace(/[\d+\-|\s]/gi, '')
      .replace(/\./g, 'a')
      .replace(/abcdefgh/, '')
      .split('');
    console.log(this.state.chess.moves());
    console.log(this.state.chess.ascii());
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
