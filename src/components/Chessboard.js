import React, { Component } from 'react';
import PropTypes from 'prop-types';

const calcX = index => (index % 8) * 12.5;
const calcY = index => Math.floor(index / 8) * 12.5;

const Chessboard = (props) => {
  const boardAscii = props.game.ascii().replace(/[\d+\-\| \n]/gi, '').replace(/\./g,'a').replace(/abcdefgh/,'').split('');
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
          <img
            key={index}
            src={`src/pieces/${piece}.svg`}
            height="80px"
            width="80px"
          />);
      })}
    </div>
  );
}

export default Chessboard;
