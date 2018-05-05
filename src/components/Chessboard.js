import React, { Component } from 'react';

class Chessboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: Array.from({length: 64}, (value, key) => key),
    };
  }
  render() {
  let { fields } = this.state;

    return (
      <div className='chessboard'>
        {fields.map(field => {
          return <div key={field} className={'field ' + (field % 2 ? 'black' : 'white')} >{field}</div>;
        })}
      </div>
    );
  }
}

export default Chessboard;
