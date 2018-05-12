import React from 'react';
import Chess from 'chess.js';

import Chessboard from './components/Chessboard';
import MovesHistory from './components/MovesHistory';

const chess = new Chess();

const App = () => (
  <div className="App">
    <h1>ShallowBlue.js</h1>
    <Chessboard chess={chess} />
    <MovesHistory />
  </div>
);

export default App;
