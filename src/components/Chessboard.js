import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Chessboard = () => {
  return (
    <div className='chessboard'>
      <svg viewBox="0 0 220 100" >
        <rect x="0" y="0" width="100" height="100" />
      </svg>
    </div>
  );
}

export default Chessboard;
