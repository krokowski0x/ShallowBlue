import React from 'react';
import Chess from 'chess.js';

import Chessboard from './components/Chessboard';
import MovesHistory from './components/MovesHistory';

const chess = new Chess();
const helperArray = Array.from({ length: 8 }, (v, k) => k + 1);

const App = () => (
  <div className="App">
    <h1>ShallowBlue.js</h1>
    <div className="rows">{helperArray.map(i => <p key={i}>{i}</p>)}</div>
    <Chessboard chess={chess} />
    <MovesHistory />
    <div className="cols">{helperArray.map(i => <p key={i}>{String.fromCharCode(i + 96)}</p>)}</div>
  </div>
);

export default App;
