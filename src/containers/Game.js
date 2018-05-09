import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = state => ({
  title: state.title,
  game: state.game,
});

const Game = connect(
  mapStateToProps,
)(App);

export default Game;
