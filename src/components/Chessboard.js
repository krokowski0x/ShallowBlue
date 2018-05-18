import React, { Component } from 'react';
import Draggable from 'react-draggable';

import Square from './Square';

class Chessboard extends Component {
  constructor(props) {
    super(props);
    this.calcX = index => (index % 8) * 12.5;
    this.calcY = index => Math.floor(index / 8) * 12.5;
    this.handleStart = (e) => {
      const square = `${String.fromCharCode(Math.floor(e.clientX / 80) + 97)}${9-Math.floor(e.clientY / 80)}`;
      console.log(square);
      this.setState({ from: square });
    };
    this.handleStop = (e) => {
      const square = `${String.fromCharCode(Math.floor(e.x / 80) + 97)}${9-Math.floor(e.y / 80)}`;
      this.state.chess.move({ from: this.state.from, to: square });
      this.setState(this.state.chess);
    };
    this.state = {
      chess: props.chess,
      boardAscii: props.chess.ascii()
        .replace(/[\d+\-|\s]/gi, '')
        .replace(/\./g, 'a')
        .replace(/abcdefgh/, '')
        .split(''),
    };
  }

  render() {
    console.log(this.state.chess.ascii());
    return (
      <div className="chessboard">
        <svg width="640" height="640" viewBox="0 0 100 100">
          {this.state.boardAscii.map((square, index) => <Square key={index} index={index} />)}
        </svg>
        {this.state.boardAscii.map((piece, index) => {
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
