import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Chessboard from './components/Chessboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Chessboard />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;