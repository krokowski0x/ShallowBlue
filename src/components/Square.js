import React from 'react';

const calcX = index => (index % 8) * 12.5;
const calcY = index => Math.floor(index / 8) * 12.5;

const Square = (props) => {
  const { index } = props;

  return (
    <rect
      onClick={() => console.log(index)}
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
