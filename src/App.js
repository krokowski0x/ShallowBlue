import React, { Component } from 'react';
import Chess from 'chess.js';
import Modal from 'react-modal';

import Chessboard from './components/Chessboard';
import MovesHistory from './components/MovesHistory';

const chess = new Chess();
const helperArray = Array.from({ length: 8 }, (v, k) => k + 1);
const options = ['random', '2', '3', '4', 'nn'];

Modal.setAppElement('#app-container');

class App extends Component {
  constructor() {
    super();

    this.state = {
      chess,
      showModal: true,
      difficulty: '3',
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ showModal: false });
  }

  handleChange(e) {
    this.setState({ difficulty: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Modal
          isOpen={this.state.showModal}
          className="Modal"
          overlayClassName="Overlay"
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2>Welcome to ShallowBlue.js!</h2>
          <form id="difficulty">
            <legend>Choose Game Difficulty</legend>
            <div className="fieldgroup">
              {options.map((option) => {
                return (
                  <label key={option} htmlFor={option}>{option}<br />
                    <input
                      type="radio"
                      name={option}
                      value={option}
                      checked={this.state.difficulty === option}
                      onChange={this.handleChange}
                    />
                  </label>);
              })}
            </div>
            <button type="submit" onClick={this.closeModal}>Start!</button>
          </form>
        </Modal>
        <h1>ShallowBlue.js</h1>
        <div className="rows">{helperArray.map(i => <p key={i}>{9 - i}</p>)}</div>
        <Chessboard chess={this.state.chess} onMove={chess => this.setState({ chess })} difficulty={this.state.difficulty} />
        <MovesHistory chess={this.state.chess} />
        <div className="cols">
          {helperArray.map(i => <p key={i}>{String.fromCharCode(i + 96)}</p>)}
        </div>
      </div>
    );
  }
}
export default App;
