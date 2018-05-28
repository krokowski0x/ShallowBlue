import React, { Component } from 'react';
import Chess from 'chess.js';

import WelcomeModal from './components/WelcomeModal';
import GameOverModal from './components/GameOverModal';
import Chessboard from './components/Chessboard';
import MovesHistory from './components/MovesHistory';

const chess = new Chess();
const helperArray = Array.from({ length: 8 }, (v, k) => k + 1);

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      chess,
      difficulty: '3',
    };
  }

  render() {
    if (!this.state.chess.game_over())
      return (
        <div className="App">
          <WelcomeModal
            difficulty={this.state.difficulty}
            onOptionChange={difficulty => this.setState({ difficulty })}
          />
          <h1>ShallowBlue.js</h1>
          <div className="rows">{helperArray.map(i => <p key={i}>{9 - i}</p>)}</div>
          <Chessboard
            chess={this.state.chess}
            onMove={chess => this.setState({ chess })}
            difficulty={parseInt(this.state.difficulty, 10)}
          />
          <MovesHistory
            chess={this.state.chess}
            onUndo={chess => this.setState({ chess })}
          />
          <div className="cols">
            {helperArray.map(i => <p key={i}>{String.fromCharCode(i + 96)}</p>)}
          </div>
        </div>
      );
    return <GameOverModal chess={chess} />
  }
}
