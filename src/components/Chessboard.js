import React, { Component } from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

const calcX = index => (index % 8) * 12.5;
const calcY = index => Math.floor(index / 8) * 12.5;

const Chessboard = (props) => {
  const boardAscii = props.game.ascii()
    .replace(/[\d+\-\| \n]/gi, '')
    .replace(/\./g,'a')
    .replace(/abcdefgh/,'')
    .split('');
console.log(props.game.ascii());
  return (
    <div className='chessboard'>
      <svg width="640" height="640" viewBox="0 0 100 100">
        {boardAscii.map((square, index) => {
          return (
            <g key={index}>
              <rect
              x={calcX(index)}
              y={calcY(index)}
              width="12.5"
              height="12.5"
              className={
                calcY(index) % 25
                ? (!(index % 2) ? 'black' : 'white')
                : ((index % 2) ? 'black' : 'white')
              }
            />
            </g>);
        })}
      </svg>
      {boardAscii.map((piece, index) => {
        if (piece.toLowerCase() === piece)
          piece += 'b';
        else
          piece +='w';

        return (
          <Draggable
            key={index}
            //bounds="parent"
            disabled={piece === 'ab' ? true : false}
            grid={[80, 80]}>
            <img
              src={`src/pieces/${piece}.svg`}
              height="80px"
              width="80px"
            />
          </Draggable>);
      })}
    </div>
  );
}

export default Chessboard;
