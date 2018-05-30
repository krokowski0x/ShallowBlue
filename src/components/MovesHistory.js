import React, { Component } from 'react';
import HistoryRecord from './HistoryRecord';

class MovesHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chess: props.chess,
    };

    this.handleUndo = this.handleUndo.bind(this);
  }

  handleUndo() {
    this.state.chess.undo();
    this.state.chess.undo();
    this.props.onUndo(this.state.chess);
  }

  render() {
    const history = this.state.chess.history({ verbose: true });
    return (
      <div className="moves">
        <h2>Moves:</h2>
        <hr />
        <div className="infobox">
          <span>Turn</span><span>Check</span><span>Undo</span>
          <span className={`turn ${this.state.chess.turn()}`} />
          {this.state.chess.in_check() ?
            <span className="check yes">CHECK!</span> :
            <span className="check no">nope</span>}
          <span className="undo" onClick={this.handleUndo}>&#8630;</span>
        </div>
        <hr />
        <ul>
          {history.map(record => (
            <HistoryRecord
              key={history.san}
              record={record}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default MovesHistory;
