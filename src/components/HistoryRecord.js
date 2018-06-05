import React, { Component } from 'react';
import { Collapse } from 'react-collapse';

export default class HistoryRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      info: props.info,
    };
  }

  render() {
    const { record, key } = this.props;
    const { isOpened, info } = this.state;

    return (
      <li key={key}>
        <img
          alt="Chess Piece"
          draggable="false"
          src={`src/pieces/${record.piece}${record.color}.svg`}
        />
        <span className="moveRecord">
          {record.from} &#10230; {record.to}
        </span>
        {record.captured ? <span className="captureRecord">Capture!</span> : <span />}
        {record.color === 'b' ?
          <button
            onClick={() => this.setState({ isOpened: !isOpened })}
          > &#9661;
          </button> : <span />}
        <Collapse className="AIinfo" isOpened={isOpened}>
          <span>{`Move took ${info.time} s and evaluated ${info.positions} possible positions.`}</span>
        </Collapse>
      </li>
    );
  }
}
