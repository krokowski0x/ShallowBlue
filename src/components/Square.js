import React from 'react';
import { calcX, calcY } from '../utils/positioning';

const Square = (props) => {
  const { index } = props;

  return (
    <rect
      id={`${String.fromCharCode(Math.floor(index % 8) + 97)}${8 - Math.floor(index / 8)}`}
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
  );
};

export default Square;
