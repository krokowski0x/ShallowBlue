import React, { Component } from 'react';
import Draggable from 'react-draggable';

// import { moved } from './../actions/actions';

class Chessboard extends Component {
  constructor(props) {
    super(props);
    this.calcX = index => (index % 8) * 12.5;
    this.calcY = index => Math.floor(index / 8) * 12.5;
    this.onStop = e => console.log(`${String.fromCharCode(Math.floor(e.x / 80) + 97)}${Math.floor((e.y - 37) / 80)}`);
    this.state = {
      boardAscii: props.game.ascii()
        .replace(/[\d+\-|\s]/gi, '')
        .replace(/\./g, 'a')
        .replace(/abcdefgh/, '')
        .split(''),
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="chessboard">
        <svg width="640" height="640" viewBox="0 0 100 100">
          {this.state.boardAscii.map((square, index) => (
            <rect
              key={`${String.fromCharCode(Math.floor(index / 8) + 97)}${(index % 8) + 1}`}
              x={this.calcX(index)}
              y={this.calcY(index)}
              width="12.5"
              height="12.5"
              className={
                this.calcY(index) % 25
                ? (!(index % 2) ? 'black' : 'white')
                : ((index % 2) ? 'black' : 'white')
              }
            />))}
        </svg>
        {this.state.boardAscii.map((piece, index) => {
          if (piece.toLowerCase() === piece)
            piece += 'b';
          else
            piece += 'w';

          return (
            <Draggable
              key={index}
              // bounds="parent"
              disabled={piece === 'ab'}
              onStop={this.onStop}
              grid={[80, 80]}
            >
              <img
                alt="Chess Piece"
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
