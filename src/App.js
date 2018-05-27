import React, { Component } from 'react';
import Chess from 'chess.js';
import Modal from 'react-modal';

import Chessboard from './components/Chessboard';
import MovesHistory from './components/MovesHistory';

const chess = new Chess();
const helperArray = Array.from({ length: 8 }, (v, k) => k + 1);
const options = [
  { name: 'Dumb', value: '1', class: 'easy', description: 'More like an Artifficial Dumbness type of difficulty. AI making random moves from available ones.' },
  { name: 'Weak', value: '2', class: 'moderate', description: 'AI using minimax game tree search with alfa-beta pruning improvement. Search depth: 2, evaluationg about 100 positions per move.' },
  { name: 'Fine', value: '3', class: 'moderate', description: 'AI using minimax game tree search with alfa-beta pruning improvement. Search depth: 3, evaluationg about 1000 positions per move.' },
  { name: 'Tough', value: '4', class: 'moderate', description: 'AI using minimax game tree search with alfa-beta pruning improvement. Search depth: 4, evaluationg about 10000 positions per move.' },
  { name: 'Badass', value: '5', class: 'hard', description: 'Tensorflow.js trained Neural Network using Reinforcement Learning method. Work in progress. Available soon.' }
];

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
          <h1>Welcome to ShallowBlue.js!</h1>
          <form id="difficulty">
            <h2>Choose Game Difficulty</h2>
            <div className="options">
              {options.map((option) => {
                return (
                  <label
                    key={option.name}
                    htmlFor={option.name}
                    className={option.class}
                  >{option.name}<br />
                    <input
                      type="radio"
                      name={option.name}
                      value={option.value}
                      checked={this.state.difficulty === option.value}
                      onChange={this.handleChange}
                      disabled={option.name === 'Badass'}
                    />
                    <span className="checkmark" />
                    <p className={option.class}>{option.description}</p>
                  </label>);
              })}
            </div>
            <button type="submit" onClick={this.closeModal}>Start!</button>
          </form>
        </Modal>
        <h1>ShallowBlue.js</h1>
        <div className="rows">{helperArray.map(i => <p key={i}>{9 - i}</p>)}</div>
        <Chessboard chess={this.state.chess} onMove={chess => this.setState({ chess })} difficulty={parseInt(this.state.difficulty, 10)} />
        <MovesHistory chess={this.state.chess} onUndo={chess => this.setState({ chess })} />
        <div className="cols">
          {helperArray.map(i => <p key={i}>{String.fromCharCode(i + 96)}</p>)}
        </div>
      </div>
    );
  }
}
export default App;
