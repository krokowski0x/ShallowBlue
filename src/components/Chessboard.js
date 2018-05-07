import React, { Component } from 'react';
import PropTypes from 'prop-types';

const boardArray = Array.from({length: 64}, (value, key) => key);
const calcX = index => (index % 8) * 10;
const calcY = index => Math.floor(index / 8) * 10;

const Chessboard = () => {
  return (
    <div className='chessboard'>
      <svg viewBox="0 0 220 100" >
        <rect x="0" y="0" width="80" height="80" />
        {boardArray.map((square, index) => {
          return <rect
            key={index}
            x={calcX(index)}
            y={calcY(index)}
            width="10"
            height="10"
            class={
              calcY(index) % 20
              ? (!(index % 2) ? 'black' : 'white')
              : ((index % 2) ? 'black' : 'white')
            }
          />;
        })}
      </svg>
    </div>
  );
}

export default Chessboard;
