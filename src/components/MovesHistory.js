import React, { Component } from 'react';

class MovesHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chess: props.chess,
    };
  }

  render() {
    const history = this.state.chess.history({ verbose: true });
    return (
      <div className="moves">
        <h2>Moves</h2>
        <hr />
        <ul>
          {history.map(record => (
            <li key={record.san}>
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
