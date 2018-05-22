import React, { Component } from 'react';

class MovesHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chess: props.chess,
    }
  }
  render() {
    let history = this.state.chess.history({ verbose: true })
    console.log(history.length);
    return (
      <div className="moves">
        <h2>Moves</h2>
        <hr />
        <ul>
          {history.map(record => (
            <li key={record.san}>
              <span>
                <img
                  alt="Chess Piece"
                  draggable="false"
                  src={`src/pieces/${record.piece}${record.color}.svg`}
                  height="30px"
                  width="30px"
                />
                {record.from} -> {record.to}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MovesHistory;
