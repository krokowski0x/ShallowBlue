import React from 'react';
import Game from './containers/Game';
import MovesHistory from './components/MovesHistory';

const App = () => (
  <div className="App">
    <h1>ShallowBlue.js</h1>
    <Game />
    <MovesHistory />
  </div>
);

export default App;
