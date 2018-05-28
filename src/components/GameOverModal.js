import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app-container');

export default class WelcomeModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      chess: this.props.chess,
    };

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { chess } = this.state;
    const result = chess.history({ verbose: true })[chess.history.length - 1].color === 'b' ? 'LOST' : 'WON';
    const outcome =
      chess.in_checkmate() ? ' CHECKMATE' :
        chess.in_draw() ? ' DRAW' :
          chess.in_stalemate() ? ' STALEMATE' :
            chess.insufficient_material() ? 'n INSUFFICIENT MATERIAL' : '';

    return (
      <Modal
        isOpen={this.state.showModal}
        className="Modal"
        overlayClassName="Overlay"
        onRequestClose={this.closeModal}
        contentLabel="Game Over Modal"
      >
        <h1>{`You've ${result} by a${outcome}!`}</h1>
        <button onClick={e => location.reload()}>Try again</button>
      </Modal>
    );
  }
}
