import React from 'react';
import PropTypes from 'prop-types';

import Chessboard from './components/Chessboard';
import MovesHistory from './components/MovesHistory';

const App = props => (
  <div className="App">
    <h1>{props.title}</h1>
    <Chessboard game={props.game} />
    <MovesHistory />
  </div>
);


App.propTypes = {
  title: PropTypes.string.isRequired,
  game: PropTypes.object.isRequired,
};

export default App;
