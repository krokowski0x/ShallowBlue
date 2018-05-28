import React, { Component } from 'react';

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
          <span>Check</span><span>Turn</span><span>Undo</span>
          {this.state.chess.in_check() ?
            <span className="check yes">CHECK!</span> :
            <span className="check no">nope</span>}
          <span className={`turn ${this.state.chess.turn()}`} />
          <span className="undo" onClick={this.handleUndo}>&#8630;</span>
        </div>
        <hr />
        <ul>
          {history.map(record => (
            <li key={history.san}>
              <img
                alt="Chess Piece"
                draggable="false"
                src={`src/pieces/${record.piece}${record.color}.svg`}
              />
              <span className="moveRecord">
                {record.from} &#10230; {record.to}
              </span>
              {record.captured ? <span className="captureRecord">Capture!</span> : <span />}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MovesHistory;
