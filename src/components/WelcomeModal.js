import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app-container');

const options = [
  { name: 'Dumb', value: '1', class: 'easy', description: 'More like an Artifficial Dumbness type of difficulty. AI making random moves from available ones.' },
  { name: 'Weak', value: '2', class: 'moderate', description: 'AI using minimax game tree search with alfa-beta pruning improvement. Search depth: 2, evaluationg about 100 positions per move.' },
  { name: 'Fine', value: '3', class: 'moderate', description: 'AI using minimax game tree search with alfa-beta pruning improvement. Search depth: 3, evaluationg about 1000 positions per move.' },
  { name: 'Tough', value: '4', class: 'moderate', description: 'AI using minimax game tree search with alfa-beta pruning improvement. Search depth: 4, evaluationg about 10000 positions per move.' },
  { name: 'Badass', value: '5', class: 'hard', description: 'Tensorflow.js trained Neural Network using Reinforcement Learning method. Work in progress. Available soon.' }
];

export default class WelcomeModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      difficulty: this.props.difficulty,
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
    this.props.onOptionChange(e.target.value);
  }

  render() {
    return (
      <Modal
        isOpen={this.state.showModal}
        className="Modal"
        overlayClassName="Overlay"
        onRequestClose={this.closeModal}
        contentLabel="Welcome Modal"
      >
        <h1>Welcome to ShallowBlue.js!</h1>
        <form id="difficulty">
          <h2>Choose Game Difficulty</h2>
          <div className="options">
            {options.map(option => (
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
              </label>
            ))}
          </div>
          <button type="submit" onClick={this.closeModal}>Start!</button>
        </form>
      </Modal>
    );
  }
}
