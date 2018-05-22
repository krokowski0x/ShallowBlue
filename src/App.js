import React, { Component } from 'react';
import Chess from 'chess.js';

import Chessboard from './components/Chessboard';
import MovesHistory from './components/MovesHistory';

const chess = new Chess();
const helperArray = Array.from({ length: 8 }, (v, k) => k + 1);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chess,
    };
  }
  render() {
    return (
      <div className="App">
        <h1>ShallowBlue.js</h1>
        <div className="rows">{helperArray.map(i => <p key={i}>{9 - i}</p>)}</div>
        <Chessboard chess={this.state.chess} onMove={chess => this.setState({chess})}/>
        <MovesHistory chess={this.state.chess} />
        <div className="cols">{helperArray.map(i => <p key={i}>{String.fromCharCode(i + 96)}</p>)}</div>
      </div>
    );
  }
}
export default App;
